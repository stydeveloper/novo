"use client";
import { useTabs } from "@/context/TabContext";
import { AccordionItem } from "../accordionItem/AccordionItem";

const Accordions = () => {
  const {
    activeTab,

    questions,

    filteredQuestions,
  } = useTabs();

  console.log("filteredQuestions", filteredQuestions);

  if (activeTab?.id === "allTopics") {
    return (
      <div className="flex-1 bg-[#e1e2ea]">
        <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-[3rem] lg:gap-3 pt-6 pb-3">
          {Object.entries(questions).map(([category, questionsArray]) => (
            <AccordionItem
              key={category}
              title={category}
              questions={questionsArray}
              color={questionsArray[0].color} // Assuming color is consistent within the category
            />
          ))}
        </div>
      </div>
    );
  } else {
    // For other tabs, render one accordion with multiple questions and answers
    return (
      <div className="flex-1 bg-[#e1e2ea]">
        <div className="w-[70%] m-auto flex flex-col gap-3 pt-6 pb-3">
          {filteredQuestions && filteredQuestions.length > 0 && (
            <AccordionItem
              title={`Questions about ${filteredQuestions[0].title}`}
              questions={filteredQuestions}
              color={
                filteredQuestions.length > 0
                  ? filteredQuestions[0].color
                  : "#eee"
              }
            />
          )}
        </div>
      </div>
    );
  }
};

export default Accordions;
