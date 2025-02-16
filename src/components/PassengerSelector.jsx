import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const PassengerSelector = ({ adults, setAdults, children, setChildren }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-27">
      {/* Dropdown Button */}
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-gray-800  border-none outline-none  cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        {adults} {adults > 1 ? "adults" : "adult"}
        <FaChevronDown className="text-gray-500" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 w-50 bg-white border border-gray-300 rounded-lg shadow-lg top-12">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white rounded-t-lg">
            <span className="font-semibold">{adults} {adults > 1 ? "adults" : "adult"}</span>
            <FaTimes className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          {/* Passenger Controls */}
          <div className="p-4 space-y-4">
            {/* Adults Control */}
            <div className="flex items-center justify-between">
              <span>Adults</span>
              <div className="flex items-center space-x-2">
                <button
                  className="px-2 py-1 border "
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                >
                  −
                </button>
                <span>{adults}</span>
                <button
                  className="px-2 py-1 border "
                  onClick={() => setAdults(adults + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Children Control */}
            <div className="flex items-center justify-between">
              <span>Children</span>
              <div className="flex items-center space-x-2">
                <button
                  className="px-2 py-1 border "
                  onClick={() => setChildren(Math.max(0, children - 1))}
                >
                  −
                </button>
                <span>{children}</span>
                <button
                  className="px-2 py-1 border "
                  onClick={() => setChildren(children + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;
