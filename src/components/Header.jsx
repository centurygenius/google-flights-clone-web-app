import logo from "../assets/logo.png";
import ukflag from "../assets/ukflag.png";
import React, { useState } from "react";
import Select from "react-select";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import ReactCountryFlag from "react-country-flag";
import { HiMenu } from "react-icons/hi";



// Country & Language List
const countryOptions = [
    { code: "gb", label: "English", value: "" },
    { code: "it", label: "Italiano", value: "it-IT" },
    { code: "br", label: "Português", value: "pt-BR" },
    { code: "fr", label: "Français", value: "fr-FR" },
    { code: "de", label: "Deutsch", value: "de-DE" },
    { code: "es", label: "Español", value: "es-ES" }, 
    { code: "il", label: "Hebrew", value: ""}
  ];
  
  // Custom Styles for React-Select
  const customStyles = {
    control: (base) => ({
      ...base,
      padding: "5px",
      borderRadius: "8px",
      boxShadow: "none",
      width: "170px",
      border: "none",
    }),
    option: (base, { isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? "#4F46E5" : "white",
      color: isSelected ? "white" : "black",
      display: "flex",
      alignItems: "center",
      padding: "10px",
    }),

    singleValue: (base) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }),
  };
  
  // Language Dropdown Component
  const LanguageDropdown = ({ selectedOption, setSelectedOption }) => {
    
    return (
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={countryOptions.map((country) => ({
          value: country.value,
          label: (
            <div className="flex items-center gap-2 ">
              <img
                src={`https://flagcdn.com/16x12/${country.code}.png`} // Fetch flag dynamically
                alt={country.label}
                className="w-6 h-4"
              />
              {country.label}
           
            </div>
          ),
        }))}
        styles={customStyles}
        placeholder="Select Language"
      />
    
    );
  };
  

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState({
      value: "",
      code: "gb",
      label: "English"
    });

    return (
        <header className="bg-white shadow-md py-3">
            <div className="container mx-auto h-full flex items-center justify-between px-4">

                {/* Mobile Menu Toggle */}
                <button 
                    className="sm:hidden text-2xl text-blue-600" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                  <HiMenu />
                </button>

                 {/* Logo - Centered on Mobile */}
                <div className="flex items-center justify-center flex-grow">
                  <Link to="/" className="block">
                    <img src={logo} alt="logo" className="w-32 sm:w-44 md:w-64" />
                  </Link>
                </div>

                {/* Desktop navigation links */}
                <div className="hidden sm:flex items-center gap-4">
                    <a className="text-blue-700 hover:cursor-pointer">Flights</a>
                    <a className="hover:cursor-pointer">Cars</a>
                    <a className="hover:cursor-pointer">Hotels</a>
                </div>

                {/* Dropdown for country maps and languages */}
                <div className=" hidden sm:flex flex-row items-center gap-2">
                
                    {/* Language dropdown */}
                    <LanguageDropdown className="" selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                    
                    {/* Phone Contact */}
                    <div className=" w-[65%] flex">
                        <div className=" flex items-center gap-2 ">
                            <BsTelephoneFill className="text-blue-500" size={20} />
                        </div>
                        <div className="text-xs font-bold text-blue-500 ">
                            <span className="text-sm">+1-833-7481763</span><br/>
                            <span className="text-gray-600">Call Now for Unpublished Phone Fares</span>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Mobile Menu (Dropdown) */}
            {menuOpen && (
                <div className="sm:hidden flex flex-col items-center bg-white shadow-md py-2">
                    <a className="py-2 text-blue-700">Flights</a>
                    <a className="py-2">Cars</a>
                    <a className="py-2">Hotels</a>
                    <LanguageDropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                    <div className="flex items-center gap-2 mt-2">
                        <BsTelephoneFill className="text-blue-500" size={20} />
                        <div className="text-xs font-bold text-blue-500">
                            <span className="text-sm">+1-833-7481763</span><br/>
                            <span className="text-gray-600">Call Now for Unpublished Phone Fares</span>
                        </div>
                    </div>
                </div>
            )}
          <hr/>
        </header>
        
    )
}

export default Header;