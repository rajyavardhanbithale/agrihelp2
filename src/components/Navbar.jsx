
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './c.css'
import { useTranslation } from 'react-i18next';

function Navbar({ onSelectedValue }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value) => {
        setSelectedValue(value);
        setIsOpen(false);

        onSelectedValue(value); // Pass the selected value to the parent component
    };

    return (
        <>
            <header className="font-sans text-white body-font bg-green-700">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">

                    <div className="flex items-center justify-center ml-5 cust-mid cust-mid-mar">

                        <img className="block h-10 w-auto" src="navbar-logo.png" alt="Your Company" />
                        <span className="ml-3 text-xl">{t("agrihelp.title")}</span>
                    </div>

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center text-sm">


                        <Link to="/" className="mr-5 hover:text-gray-700 transition duration-700 ease-in-out">
                            {t("navbar.home")}
                        </Link>

                        <Link to="/weather" className="mr-5 hover:text-gray-700 transition duration-700 ease-in-out">
                            {t("navbar.weather")}
                        </Link>


                        <Link to="/soil-analysis" className="mr-5 hover:text-gray-700 transition duration-700 ease-in-out">
                            {t("navbar.soil")}
                        </Link>
                        <Link to="/shop" className="mr-5 hover:text-gray-700 transition duration-700 ease-in-out">
                            {t("navbar.shop")}
                        </Link>


                        <Link to="https://agrotech-278f8.firebaseapp.com" className="mr-5 hover:text-gray-700 transition duration-700 ease-in-out">
                            {t("navbar.chat")}
                        </Link>


                        <Link to="/pest-control" className="mr-5 hover:text-gray-700 transition duration-700 ease-in-out">
                            {t("navbar.pest")}
                        </Link>


                        <Link to="/resources" className="mr-5 hover:text-gray-700 transition duration-700 ease-in-out">
                            {t("navbar.resources")}
                        </Link>

                        <Link to="/gov-scheme" className="mr-5 hover:text-gray-700 transition duration-700 ease-in-out">
                            {t("navbar.gov-scheme")}
                        </Link>
                        <Link to="/buy-sell" className="mr-5 hover:text-gray-700 transition duration-700 ease-in-out">
                            {t("navbar.buy")}
                        </Link>
                        <Link to="/about" className="mr-5 hover:text-gray-700 transition duration-700 ease-in-out">
                            {t("navbar.about")}
                        </Link>
                        <Link to="/feedback" className="mr-5 hover:text-gray-700 transition duration-700 ease-in-out">
                            {t("navbar.feedback")}
                        </Link>
                    </nav>


                    <div className="flex items-center justify-center cust-mid cust-mid-mar ">


                        <div className="relative inline-block ">
                            <button
                                id="dropdownDefaultButton"
                                data-dropdown-toggle="dropdown"
                                className="text-white bg-green-700 hover:bg-green-800  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-green-800 ml-7"
                                type="button"
                                onClick={toggleDropdown}
                            >
                                {t("navbar.lang.title")}
                                <svg
                                    className={`w-4 h-4 ml-2 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                    aria-hidden="true"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {isOpen && (
                                <div
                                    id="dropdown"
                                    className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                >
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <button
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => handleOptionClick('en')}
                                            >
                                                English
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => handleOptionClick('hi')}
                                            >
                                                हिंदी
                                            </button>
                                        </li>                                        <li>
                                            <button
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => handleOptionClick('pn')}
                                            >

                                                ਪੰਜਾਬੀ
                                            </button>                                            <button
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => handleOptionClick('mr')}
                                            >

                                                मराठी
                                            </button>                                            <button
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => handleOptionClick('gj')}
                                            >

                                                ગુજરાતી
                                            </button>


                                                                                      <button
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => handleOptionClick('te')}
                                            >

తెలుగు
                                            </button>

                                            

                                            
                                        </li>


                                    </ul>
                                </div>
                            )}
                            {selectedValue && <p className="sellang">{t("navbar.lang.selected")} :  {selectedValue} &nbsp;&nbsp;</p>}
                        </div>
                    </div>


                </div>

            </header >
        </>
    );
}

export default Navbar;