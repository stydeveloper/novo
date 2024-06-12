"use client";
import React from "react";
import { Spinner as FlowbiteSpinner } from "flowbite-react";

const Loader = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-50">
      <FlowbiteSpinner aria-label="Default status example" />
    </div>
  );
};

export default Loader;
