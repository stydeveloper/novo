"use client";
import "./Tabs.css";
import { useTabs } from "@/context/TabContext";
import { filterQuestionsByCategory, transformQuestions } from "@/utils/helper";

const Tabs = () => {
  const {
    activeTab,
    setActiveTab,
    questions,
    setQuestions,
    setFilteredQuestions,
  } = useTabs();

  const tabs = [
    { id: "allTopics", label: "All Topics" },
    { id: "General", label: "General", icon: "fa fa-check-circle" },
    { id: "Novo Safety Program (NSP)", label: "Novo Safety Program (NSP)" },
    { id: "Claims", label: "Claims" },
    { id: "Mobile App", label: "Mobile App" },
    { id: "Auto Insurance", label: "Auto Insurance" },
  ];

  const handleTab = (tab) => {
    setActiveTab(tab);

    if (tab.id === "allTopics") {
      setQuestions(questions);
      setFilteredQuestions([]);
      return;
    }

    // Use the updated helper functions
    const filteredQuestions = filterQuestionsByCategory(questions, tab.id);
    const transformedQuestions = transformQuestions(filteredQuestions);

    console.log("transformedQuestions", transformedQuestions);

    setFilteredQuestions(transformedQuestions);
  };

  return (
    <div className="   bg-[#f1f2f5]">
      <div className="w-[70%] m-auto py-1  flex items-center justify-between  flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center  space-x-2 py-2 px-4 rounded-lg text-sm font-medium 
                      ${
                        activeTab?.id === tab.id
                          ? "bg-green-100 text-green-700"
                          : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                      }`}
            onClick={() => handleTab(tab)}
          >
            {tab.icon && <i className={`${tab.icon} text-green-600`}></i>}
            <span
              className={` py-2 px-4  rounded-3xl bg-[#ffffff]  text-[#999aa7]  text-sm ${
                activeTab?.id === tab.id
                  ? "bg-green-100 text-green-700 border-2 border-gray-400 shadow-md"
                  : "text-gray-400 shadow-sm hover:bg-gray-100 hover:text-gray-600 border border-gray-300"
              }`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
