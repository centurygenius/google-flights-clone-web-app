import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const TravelClassSelector = ({ classType, setClassType }) => {
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [isOpen, setIsOpen] = useState(false);

  const handleClassChange = (event) => {
    const selected = event.target.value;
    setClassType(selected); // Update parent state
  };

  return (
    <div className="relative w-27">
          {/* Dropdown Button */}
          <button
            className="flex items-center justify-between w-31 px-4 py-2 text-gray-800  border-none outline-none  cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
          >
            {classType || "Economy"}
            <FaChevronDown className="text-gray-500 " />
          </button>
    
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute z-10 w-40 bg-white border border-gray-300 rounded-lg shadow-lg top-12">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white rounded-t-lg">
                <span className="font-semibold text-xl"> Class </span>
                <FaTimes className="cursor-pointer" onClick={() => setIsOpen(false)} />
              </div>
    
              {/* Class Options */}
              <div className="p-4 space-y-4">
                {/* Class Selector */}

                {["Economy", "Business", "First Class"].map((type) => (
                  <label key={type} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      className="mr-2"
                      value={type}
                      checked={classType === type}
                      onChange={handleClassChange}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    };

export default TravelClassSelector;
