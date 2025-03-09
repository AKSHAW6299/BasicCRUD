import React from 'react';

function DeepSeekUI() {
  return (
    <div className="font-sans bg-gradient-to-b from-white to-blue-100 min-h-screen flex flex-col items-center justify-center">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/deepseek-logo.png" alt="DeepSeek Logo" className="h-8 mr-2" /> {/* Replace with your logo */}
          <span className="font-semibold text-xl">deepseek</span>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-sm text-gray-600 mr-4">API Platform</a>
          <a href="#" className="text-sm text-gray-600">中文</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center mt-12">
        <p className="text-xs text-gray-600 mb-4">
          <span className="text-sm mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block align-text-top" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.158a2.033 2.033 0 01-1.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </span>
          DeepSeek-R1 is now live and open source, rivaling OpenAI's Model. Available on web, app, and API. Click for details.
        </p>
        <h1 className="text-4xl font-bold text-blue-800 mb-2">deepseek</h1>
        <p className="text-xl text-gray-700 mb-8">Into the unknown</p>

        <div className="flex space-x-4">
          <button className="bg-white border border-gray-300 rounded-lg py-3 px-6 text-blue-600 font-semibold hover:bg-gray-100 transition duration-300">
            Start Now
            <p className="text-sm text-gray-600 mt-1">Free access to DeepSeek-V3.</p>
            <p className="text-sm text-gray-600">Experience the intelligent model.</p>
          </button>
          <button className="bg-white border border-gray-300 rounded-lg py-3 px-6 text-blue-600 font-semibold hover:bg-gray-100 transition duration-300">
            Get DeepSeek App
            <p className="text-sm text-gray-600 mt-1">Chat on the go with DeepSeek-V3.</p>
            <p className="text-sm text-gray-600">Your free all-in-one AI tool.</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeepSeekUI;