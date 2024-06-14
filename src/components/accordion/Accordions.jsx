// "use client";
// import { useTabs } from "@/context/TabContext";
// import { AccordionItem } from "../accordionItem/AccordionItem";
// import { useEffect } from "react";
// import { filterQuestionsByCategory } from "@/utils/helper";
// import Loader from "../loader/Loader";

import { useEffect } from "react";
import { AccordionItem } from "../accordionItem/AccordionItem";
import { useTabs } from "@/context/TabContext";
import Loader from "../loader/Loader";
import { filterQuestionsByCategory } from "@/utils/helper";

// const Accordions = () => {
//   const {
//     activeTab,
//     questions,
//     filteredQuestions,
//     searchTerm,
//     loading,
//     setFilteredQuestions,
//   } = useTabs();

//   const displayQuestions =
//     searchTerm || activeTab.id !== "allTopics" ? filteredQuestions : questions;

//   useEffect(() => {
//     if (!searchTerm && activeTab.id !== "allTopics") {
//       // This ensures that we refresh the questions when switching tabs without search terms
//       const filtered = filterQuestionsByCategory(questions, activeTab.id);
//       setFilteredQuestions(filtered);
//     }
//   }, [activeTab, searchTerm]); // Respond to changes in activeTab or searchTerm

//   // Prepare questions for display based on the active tab or search term handling
//   let categoriesAndQuestions = [];
//   if (activeTab.id !== "allTopics" && !searchTerm) {
//     // Group all questions under this tab's category if there's no search term
//     categoriesAndQuestions = [
//       {
//         category: activeTab.label,
//         questionsArray: displayQuestions,
//       },
//     ];
//   } else {
//     // Handle as separate categories only if it's a search result or 'allTopics' tab

//     categoriesAndQuestions = Object.entries(displayQuestions).map(
//       ([category, questionsArray]) => ({
//         category,
//         questionsArray,
//       })
//     );
//   }

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <div className="relative flex-1  bg-[#e1e2ea]">
//       <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-[3rem] lg:gap-3 pt-6 pb-3">
//         {categoriesAndQuestions.map(({ category, questionsArray }) => (
//           <AccordionItem
//             key={category}
//             title={category}
//             questions={Array.isArray(questionsArray) ? questionsArray : []}
//             color={
//               questionsArray && questionsArray.length > 0
//                 ? questionsArray[0].color
//                 : "#eee"
//             }
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Accordions;
const Accordions = () => {
  const {
    activeTab,
    questions,
    filteredQuestions,
    searchTerm,
    loading,
    setFilteredQuestions,
  } = useTabs();

  const displayQuestions =
    searchTerm || activeTab.id !== "allTopics" ? filteredQuestions : questions;

  useEffect(() => {
    if (!searchTerm && activeTab.id !== "allTopics") {
      const filtered = filterQuestionsByCategory(questions, activeTab.id);
      setFilteredQuestions(filtered);
    }
  }, [activeTab, searchTerm]);

  let categoriesAndQuestions = [];
  if (activeTab.id !== "allTopics" && !searchTerm) {
    categoriesAndQuestions = [
      {
        category: activeTab.label,
        questionsArray: displayQuestions,
        image: displayQuestions[0]?.image, // Assuming each question carries an image URL
      },
    ];
  } else {
    categoriesAndQuestions = Object.entries(displayQuestions).map(
      ([category, questionsArray]) => ({
        category,
        questionsArray,
        image: questionsArray[0]?.image, // Use the first question's image as the category image
      })
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative flex-1 bg-[#e1e2ea]">
      <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-[3rem] lg:gap-3 pt-6 pb-3">
        {categoriesAndQuestions.map(({ category, questionsArray, image }) => (
          <AccordionItem
            key={category}
            title={category}
            questions={Array.isArray(questionsArray) ? questionsArray : []}
            color={
              questionsArray && questionsArray.length > 0
                ? questionsArray[0].color
                : "#eee"
            }
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordions;
