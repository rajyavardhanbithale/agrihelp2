import { useState } from 'react';
import React from 'react';
import './c.css'
import { useTranslation } from 'react-i18next';
function Feeback() {
    const {t} = useTranslation();
    
    const apiUrl = 'http://127.0.0.1:8000/api/feedback';
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        city: '',
        phone: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`${apiUrl}?emid=${encodeURIComponent(formData.id)}&name=${encodeURIComponent(formData.name)}&city=${encodeURIComponent(formData.city)}&phone=${encodeURIComponent(formData.phone)}&message=${encodeURIComponent(formData.message)}`)
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the API
                console.log(data);
            })
            .catch((error) => {
                // Handle any errors
                console.error('Error:', error);
            });
    };
    return (
        <>
        <h1 class="text-5xl font-extrabold text-center dark:text-white m-5 mb-6">{t("feedback.title")}</h1>
            <div className="feedback">
                <div className="container-form">
                    <div className="text">{t("feedback.sub")}</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" name="id" value={formData.id} onChange={handleChange} required />
                                <div className="underline"></div>
                                <label htmlFor="id">{t("feedback.form.email")}</label>
                            </div>
                            <div className="input-data">
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                <div className="underline"></div>
                                <label htmlFor="name">{t("feedback.form.name")}</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                                <div className="underline"></div>
                                <label htmlFor="city">{t("feedback.form.place")}</label>
                            </div>
                            <div className="input-data">
                                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                                <div className="underline"></div>
                                <label htmlFor="phone">{t("feedback.form.phone")}</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data textarea">
                                <textarea rows="8" cols="80" name="message" value={formData.message} onChange={handleChange} required></textarea>
                                <br />
                                <div className="underline"></div>
                                <label htmlFor="message">{t("feedback.form.write")}</label>
                                <br />
                                <div className="submit-btn-cust ">
                                    <div className="">
                                        <div className=""></div>
                                        <input type="submit" value="Submit" />
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Feeback;