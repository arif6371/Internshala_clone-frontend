import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css"; // Add this for the styles

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); // Close the dropdown after selecting a language
  };

  return (
    <div className="language-switcher">
      <p onClick={toggleDropdown} className="dropdown-toggle">
        Language{" "}
        <i
          className={`bi ${isOpen ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}
        ></i>
      </p>
      {isOpen && (
        <div className="language-select">
          <label>{("select_language")}:</label>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="hi">हिन्दी</option>
            <option value="pt">Português</option>
            <option value="zh">中文</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
