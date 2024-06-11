"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchAllQuestions } from "@/lib/dataFetching";
import { groupQuestionsByCategory } from "@/utils/helper";

const TabContext = createContext();

export const useTabs = () => useContext(TabContext);

export const TabProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [activeTab, setActiveTab] = useState({
    id: "allTopics",
    label: "All Topics",
  });
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      const questionsData = await fetchAllQuestions();
      const groupedQuestions = groupQuestionsByCategory(questionsData);
      console.log("groupedQuestions", groupedQuestions);
      setQuestions(groupedQuestions);
    };

    loadQuestions();
  }, []);
  return (
    <TabContext.Provider
      value={{
        questions,
        setQuestions,
        activeTab,
        setActiveTab,
        filteredQuestions,
        setFilteredQuestions,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
