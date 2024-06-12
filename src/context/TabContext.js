"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchAllQuestions } from "@/lib/dataFetching";
import {
  extractPlainTextFromRichText,
  groupQuestionsByCategory,
} from "@/utils/helper";

const TabContext = createContext();

export const useTabs = () => useContext(TabContext);

export const TabProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [activeTab, setActiveTab] = useState({
    id: "allTopics",
    label: "All Topics",
  });
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadQuestions = async () => {
      const questionsData = await fetchAllQuestions();
      const groupedQuestions = groupQuestionsByCategory(questionsData);

      setQuestions(groupedQuestions);
      setFilteredQuestions(groupedQuestions);
      setLoading(false);
    };

    loadQuestions();
  }, []);

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    if (lowercasedSearchTerm === "") {
      // Only reset filteredQuestions if the active tab is 'allTopics'
      if (activeTab.id === "allTopics") {
        setFilteredQuestions(questions);
      }
    } else {
      const filtered = Object.entries(questions).reduce(
        (acc, [category, questionsArray]) => {
          const filteredQuestions = questionsArray.filter((question) => {
            const questionText = question.question.toLowerCase();
            const answerText = extractPlainTextFromRichText(
              question.answer
            ).toLowerCase();
            return (
              questionText.includes(lowercasedSearchTerm) ||
              answerText.includes(lowercasedSearchTerm) ||
              category.toLowerCase().includes(lowercasedSearchTerm)
            );
          });

          if (filteredQuestions.length > 0) {
            acc[category] = filteredQuestions;
          }
          return acc;
        },
        {}
      );

      setFilteredQuestions(filtered);
    }
  }, [searchTerm, questions, activeTab.id]);
  return (
    <TabContext.Provider
      value={{
        questions,
        setQuestions,
        activeTab,
        setActiveTab,
        filteredQuestions,
        setFilteredQuestions,
        searchTerm,
        setSearchTerm,
        loading,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
