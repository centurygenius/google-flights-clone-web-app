import logo from "../assets/logo.png";
import ukflag from "../assets/ukflag.png";
import React, { useState } from "react";
import Select from "react-select";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import ReactCountryFlag from "react-country-flag";



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
    const [selectedOption, setSelectedOption] = useState({
      value: "",
      code: "gb",
      label: "English"
    });

    return (
        <header className="h-23 sm:h-39">
            <div className="container mx-auto h-full flex items-center max-w-300 justify-between">
                 {/* Logo */}
                <div className="flex items-center gap-4">
                  <Link to="/" className="text-center block  px-8"><img src={logo} alt="logo" className="w-44 md:w-64" /></Link>
                </div>

                {/* Navigation links */}
                <div className="flex items-center gap-4">
                    <a className="text-blue-700 hover:cursor-pointer">Flights</a>
                    <a className="hover:cursor-pointer">Cars</a>
                    <a className="hover:cursor-pointer">Hotels</a>
                </div>

                {/* Dropdown for country maps and languages */}
                <div className=" flex md:flex-row flex-col items-center gap-2 md:h-23 sm:flex-col-reverse">
                
                    {/* Language dropdown */}
                    <LanguageDropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                    
                    {/* Phone Contact */}
                    <div className=" w-[65%] flex">
                        <div className=" text-blue-500 ml-1 flex items-center justify-center ">
                            <BsTelephoneFill size={27} />
                        </div>
                        <div className="ml-2.5 text-[10px] p-0.5 font-bold ">
                            <span className="text-blue-500 text-[17px]">+1-833-7481763</span><br/>
                            Call Now for Unpublished Phone Fares
                        </div>
                    </div>
                </div>

            </div>
            <hr/>
        </header>
        
    )
}

export default Header;