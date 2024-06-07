import React, { useState } from "react";
import { useTranslation } from "../context/TranslateState";
import { FlagIcon } from "react-flag-kit"; // Import flag icons

export default function LanguageChanger() {
  const { locale, changeLanguage } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    {
      code: "en",
      label: "English",
      icon: <FlagIcon code="US" size={24} />,
    },
    {
      code: "ka",
      label: "ქართული",
      icon: <FlagIcon code="GE" size={24} />,
    },
    // Add more languages as needed
  ];

  const handleLanguageChange = (code: string) => {
    changeLanguage(code as "ka" | "en");
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="language-selector flex items-center space-x-2 w-[140px] h-[40px] z-[5000] bg-white fixed right-10 top-10 shadow-md rounded-full px-3 py-1">
      <button
        type="button"
        className="flex items-center focus:outline-none rounded-full py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        onClick={toggleDropdown}
      >
        {languages.find((lang) => lang.code === locale)?.icon}
        <span className="text-gray-600 dark:text-gray-400 text-sm ml-1">
          {languages.find((lang) => lang.code === locale)?.label}
        </span>
      </button>
      {isDropdownOpen && (
        <div className="absolute top-[50px] right-5 bg-white shadow-md rounded-md overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.icon}
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
