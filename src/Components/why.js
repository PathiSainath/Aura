import React from "react";
import { FaRobot, FaComments, FaLightbulb } from "react-icons/fa";

function Why() {
  return (
    // <div className="min-h-screen bg-gradient-to-r from-purple-300 to-indigo-400 flex items-center px-8 py-16">
      <div className="min-h-screen bg-[linear-gradient(to_right,#8F87F1,#C68EFD,#E9A5F1,#FED2E2)] flex items-center px-8 py-16">
      <div className="w-full max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Why Choose Our System?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-3xl text-green-600 mb-4">
              <FaRobot />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Evaluates Answer Sheets</h3>
            <p className="text-gray-600">
              Automatically analyze and grade student responses with high accuracy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-3xl text-blue-600 mb-4">
              <FaComments />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Feedback</h3>
            <p className="text-gray-600">
              Provide constructive feedback to learners in real-time based on their answers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-yellow-500 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-3xl text-yellow-600 mb-4">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Concept-Based Questions</h3>
            <p className="text-gray-600">
              Generate new questions based on the concepts learners struggle with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
