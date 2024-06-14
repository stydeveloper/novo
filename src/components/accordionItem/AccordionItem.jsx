"use client";
import Image from "next/image";
import React, { useState } from "react";
import DropIcon from "../../../public/down-arrow.png";
import "./AccordionItem.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const AccordionItem = ({ title, questions, color, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  // Default color when the accordion is closed
  const defaultColor = "#E1E2E5";

  return (
    <div className="accordion-item rounded-sm">
      <button
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        className="accordion-toggle h-[160px] w-full lg:h-[50px] text-left focus:outline-none"
      >
        <div className="accordion-header flex h-full flex-wrap lg:flex-nowrap">
          <div className="relative color-strip w-[100%] h-[66%] lg:w-[5%] lg:h-[auto] ">
            {image && (
              <Image
                src={image}
                alt={`Image for ${title}`}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
          <h1 className="accordion-title p-[15px] lg:p-2 flex-1 flex flex-wrap items-center bg-white font-semibold">
            {title}
          </h1>
          <div className="arrow-container pr-[8px] lg:w-[6%] lg:pr-0 flex items-center justify-center bg-white">
            <div
              className="arrow-icon flex items-center p-1 rounded-full"
              style={{ backgroundColor: isOpen ? color : defaultColor }}
            >
              <Image
                alt="Toggle accordion"
                src={DropIcon}
                className={`drop-icon w-[1rem] lg:w-[0.7rem] ${
                  isOpen ? "rotate-180" : ""
                } rounded-full`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="accordion-content py-2 px-4 text-gray-500 dark:text-gray-400 bg-[#f1f2f5] rounded-sm lg:mt-[-6px]">
          {questions.map((q, index) => (
            <div
              key={index}
              className="content-inner mb-3 lg:m-2 lg:mb-2 shadow-lg  rounded-md bg-white py-2 pl-4 "
            >
              <div className="question-block mt-2">
                <h4 className="question-title text-black">{q.question}</h4>
                <hr className="divider w-5 my-2 border-2 border-black rounded-sm" />
                <p className="question-answer">
                  {documentToReactComponents(q.answer)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
