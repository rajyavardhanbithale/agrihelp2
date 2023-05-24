import React from 'react';
import { useTranslation } from 'react-i18next';
import './c.css'
function About() {
  const { t } = useTranslation();
  const icon = "";
  const data = [
    {
      "name": "Rajyavardhan Bithale",
      "email": "rajyavardhanbithale@protonmail.com",
      "github": "rajyavardhanbithale"
    },
    {
      "name": "Vedant Sahu",
      "email": "[insert email]",
      "github": "id"
    },
    {
      "name": "Siddhant Dewangan",
      "email": "[insert email]",
      "github": "id"
    },

  ];
  return (
    <>
      <div className='about'>
        <h1 class="text-5xl font-extrabold text-center dark:text-white m-5 mb-6">{t("about.title")}</h1>


        <br />
        <div>
          <p className="about-text">{t("about.head")}</p>
        </div>
        <br />
        <br />
        <p className="about-sub">{t("about.content")}</p>



      </div>


    </>
  );
};

export default About;