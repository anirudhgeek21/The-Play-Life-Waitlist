import React from 'react';

const SimpleCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-8">
      <img className="w-full" src="https://via.placeholder.com/300" alt="Placeholder" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Tag2</span>
      </div>
    </div>
  );
};

export default SimpleCard;
