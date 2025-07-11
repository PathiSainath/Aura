import React from 'react';
import paper from "../Assets/paper.png";
import Why from './why';
import Process from './Process';

function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#8F87F1,#C68EFD,#E9A5F1,#FED2E2)]">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center px-6 py-12 md:px-8 md:py-16 gap-10">
        {/* Left side: Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-2 tracking-wide">
            Welcome Kids!
          </h2>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Study Result Analyze
          </h1>
          <p className="text-white text-base md:text-lg mb-6">
            Dive into your study results with fun and easy analysis tools designed especially for you! Track your progress, celebrate your successes, and learn new tips to improve every day.
          </p>
          <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition">
            Get Started
          </button>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={paper}
            alt="Kids studying"
            className="rounded-xl shadow-2xl max-w-full h-auto animate-bounce-slow"
          />
        </div>
      </div>

      {/* Process Section */}
      <Process />

      {/* Why Section */}
      <Why />
    </div>
  );
}

export default Home;
