/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import Image from "next/image";
import SearchIcon from "../../../public/image.png";
import "./Hero.css";
import SocialLinks from "../socialLinks/SocialLinks";

const Hero = () => {
  return (
    <div className="bg-[#2A2C3D] text-white  pt-32">
      <SocialLinks />
      <div className="w-[70%] hero-content-pops m-auto overflow-hidden">
        <div className="flex flex-col gap-4 hero-content-container pb-10 w-[70%]  ">
          <div className=" text-2xl font-bold">
            <h1 className="tracking-widest ">You've Got Questions?</h1>
            <h1 className="tracking-widest">Worry Not.</h1>
            <h1 className="tracking-widest">We've Got The Answers.</h1>
          </div>
          <div className="flex relative   bg-[#F1F2F5]  items-center justify-center">
            <div className="overflow-hidden ml-2  flex items-center justify-center">
              <Image
                alt="No Recent B/Ls"
                src={SearchIcon}
                className=" max-h-6  w-[1.2rem]"
                loading="lazy"
              />
            </div>
            <input
              type="search"
              className="pl-4 border-none flex-1 text-black text-sm pr-4 py-2 flex items-center w-full bg-[#F1F2F5] placeholder-[#2A2C3D] focus:ring-transparent focus:ring-0"
              placeholder="Search the Help Center..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
