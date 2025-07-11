import React from 'react';
import document from "../Assets/Document.gif";
import Feedback from "../Assets/Feedback.png";

function Process() {
  return (
    // <div className="min-h-screen bg-gradient-to-r from-purple-300 to-indigo-400 flex flex-col items-center px-6 py-20">
      <div className="min-h-screen bg-[linear-gradient(to_right,#8F87F1,#C68EFD,#E9A5F1,#FED2E2)] flex flex-col items-center px-6 py-20">
      <h1 className="text-center text-4xl font-extrabold text-white mb-12 tracking-wide drop-shadow-md">
        Process of Evaluation of Paper
      </h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full relative">
        
        <div className="flex-1 flex justify-center order-2 md:order-1">
          <img
            src={document}
            alt="Process Animation"
            className="max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Arrow container with just curved dashed line */}
        <div className="hidden md:flex items-center justify-center order-1 md:order-2">
          <svg
            width="140"
            height="80"
            viewBox="0 0 140 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M130 40
                 Q 100 10, 70 40
                 T 10 40"
              stroke="white"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="20 12"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="32"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
        
        <div className="flex-1 flex justify-center order-1 md:order-3">
          <img
            src={Feedback}
            alt="Related Visual"
            className="max-w-xs md:max-w-sm rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}

export default Process;
