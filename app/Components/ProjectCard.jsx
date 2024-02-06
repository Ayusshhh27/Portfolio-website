import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div
        className="h-52 md:h-77 rounded-t-xl relative group overflow-hidden"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          transition: "background-image 0.3s ease-in-out",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgb(24,24,24)] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-300 ease-in-out">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-secondary-300 hover:border-secondary-900 group/link transition-all duration-300 ease-in-out"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-all duration-300 ease-in-out" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-secondary-300 hover:border-secondary-900 group/link transition-all duration-300 ease-in-out"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-all duration-300 ease-in-out" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[rgb(22,10,27)] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
        <p className="text-[#ADB7BE] text-center font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
