// export const AccordionItem = ({ title, question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="">
//       <button
//         onClick={toggleAccordion}
//         className="w-full h-[50px] text-left focus:outline-none "
//       >
//         <div className="flex  h-full">
//           <div className="w-[5%] bg-orange-500 text-orange-500"></div>
//           <h1 className="flex-1 flex flex-wrap  items-center pl-4 bg-white font-semibold">
//             {title}
//           </h1>
//           <div className="w-[5%]  arrow-pop   flex  items-center justify-center bg-white">
//             <div className="bg-orange-500 arrow-container flex items-center p-2  rounded-full ">
//               <Image
//                 alt=""
//                 src={DropIcon}
//                 className={`object-contain drop-icon w-[1rem] ${
//                   isOpen ? "rotate-180" : ""
//                 }    rounded-full`}
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//       </button>
//       {isOpen && (
//         <div className="py-2 px-4 text-gray-500 dark:text-gray-400 bg-[#f1f2f5] ">
//           <div className="m-2  shadow-lg border-2 rounded-md  bg-white py-2 pl-4">
//             <div>
//               <h4 className="acc-question text-black">{question}</h4>
//               <hr className="w-5 my-2 border-2 border-black rounded-sm" />
//               <p>{answer}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
"use client";
import Image from "next/image";
import React, { useState } from "react";
import DropIcon from "../../../public/down-arrow.png";
import "./AccordionItem.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const AccordionItem = ({ title, questions, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        onClick={toggleAccordion}
        className="h-[160px] w-full lg:h-[50px] text-left focus:outline-none "
      >
        <div className="flex h-full flex-wrap lg:flex-nowrap ">
          <div
            className={`w-[100%] h-[66%] lg:w-[5%] lg:h-auto`}
            style={{ backgroundColor: color, color: color }}
          ></div>
          <h1 className="p-[15px] lg:p-2 flex-1 flex flex-wrap  items-center  bg-white font-semibold">
            {title}
          </h1>
          <div className="w-[9%] pr-[8px]   lg:w-[5%] lg:pr-0  arrow-pop   flex  items-center justify-center bg-white">
            <div
              className=" arrow-container flex items-center p-1  rounded-full "
              style={{ backgroundColor: color }}
            >
              <Image
                alt=""
                src={DropIcon}
                className={`object-contain drop-icon w-[1rem] ${
                  isOpen ? "rotate-180" : ""
                }    rounded-full`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="py-2  px-4 text-gray-500 dark:text-gray-400 bg-[#f1f2f5] ">
          <div className="mt-[11px] mb-3  lg:m-2 lg:mb-0 shadow-lg border-2 rounded-md  bg-white py-2 pl-4">
            {questions.map((q, index) => (
              <div key={index}>
                <h4 className="acc-question text-black">{q.question}</h4>
                <hr className="w-5 my-2  rounded-sm" />
                <p>{documentToReactComponents(q.answer)}</p>{" "}
                {/* Rendering rich text */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
