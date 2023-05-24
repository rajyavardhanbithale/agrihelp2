import React from 'react';
import Cropdata from './Cropdata';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
//shopImg/soil.jpg
import './crop.css'
function Cropreccom() {

    const {t} = useTranslation();
    const [cropData, setCropData] = useState(null);
    const [formValues, setFormValues] = useState({
        nitrogen: "",
        phosphorus: "",
        potassium: "",
        phLevel: "",
        rainfall: "",
        state: "",
        city: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const queryParams = new URLSearchParams({
            N: formValues.nitrogen,
            P: formValues.phosphorus,
            K: formValues.potassium,
            RAIN: formValues.rainfall,
            CITY: formValues.city,
            PH: formValues.phLevel
          });
    
          const apiUrl = `https://agrihelp.online/api/cropreccom/?${queryParams.toString()}`;
          const response = await fetch(apiUrl);
    
          if (response.ok) {
            const data = await response.json();
            setCropData(data);
          } else {
            console.error('Request failed with status:', response.status);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
        <h1 className="text-5xl font-extrabold text-center dark:text-white m-5 mb-6">{t("cropreccom.soil")}</h1>
            
            <div className="isolate bg-white px-6 py-15 sm:py-20 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                        <img className="h-64 md:h-auto w-4/5 sm:w-80 object-cover" src="shopImg/soil.webp" alt="Crop Image" />
                    </div>
                    <form onSubmit={handleSubmit} className="mx-auto mt-8 md:mt-0 max-w-2xl center">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t("cropreccom.title")}</h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600">{t("cropreccom.sub")}</p>
                        </div>
                        <br />
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="nitrogen" className="block text-sm font-semibold leading-6 text-gray-900">{t("cropreccom.nitrogen")}</label>
                                <div className="mt-2.5">
                                    <input type="text" name="nitrogen" value={formValues.nitrogen} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  border-l-black" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phosphorus" className="block text-sm font-semibold leading-6 text-gray-900">{t("cropreccom.phosphorus")}</label>
                                <div className="mt-2.5">
                                    <input type="text" name="phosphorus" value={formValues.phosphorus} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="potassium" className="block text-sm font-semibold leading-6 text-gray-900">{t("cropreccom.potassium")}</label>
                                <div className="mt-2.5">
                                    <input type="text" name="potassium" value={formValues.potassium} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phLevel" className="block text-sm font-semibold leading-6 text-gray-900">{t("cropreccom.phLevel")}</label>
                                <div className="mt-2.5">
                                    <input type="text" name="phLevel" value={formValues.phLevel} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="rainfall" className="block text-sm font-semibold leading-6 text-gray-900">{t("cropreccom.rain")}</label>
                                <div className="mt-2.5">
                                    <input type="text" name="rainfall" value={formValues.rainfall} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-semibold leading-6 text-gray-900">{t("cropreccom.state")}</label>
                                <div className="mt-2.5">
                                    <input type="text" name="state" value={formValues.state} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-semibold leading-6 text-gray-900">{t("cropreccom.city")}</label>
                                <div className="mt-2.5">
                                    <input type="text" name="city" value={formValues.city} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="color-error-crop1">{t("cropreccom.submit")}</button>
                        </div>
                    </form>
                </div>
            </div>

            {cropData && <Cropdata crpdata={cropData.data} name={cropData.name} />}
            
        </>


    );
};
export default Cropreccom;