import React from 'react';

import './resources.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';


function Resources() {
  const icon = <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '10px', margin: '5px'}}/>;
  const {t} = useTranslation();

  return (
    <>
    <h1 className="text-5xl font-extrabold text-center dark:text-white m-5 mb-6">{t("resources.farming.title")}</h1>
      <main className="main container-resources">
        <section className="hero">
          <div className="main_text">
            {/* <h2 className="main_text-heading"></h2> */}
            <p>{t("resources.farming.sub")}</p>
            <ul>
              <li className="rescource-txt">{icon} {t("resources.farming.des1")}</li>
              <li className="rescource-txt">{icon} {t("resources.farming.des2")}</li>
              <li className="rescource-txt">{icon} {t("resources.farming.des3")}</li>
              <li className="rescource-txt">{icon} {t("resources.farming.des4")}</li>
              <li className="rescource-txt">{icon} {t("resources.farming.des5")}</li>
            </ul>
          </div>
          <div className="main_img">
            <img src="/resourcesImg/3411468.webp" alt="main_img" />
          </div>
        </section>

      <hr className="hr" />

        <section className="hero al">
          <div className="main_img">
            <img src="/resourcesImg/3393842.webp" alt="main_img" />
          </div>
          <div className="main_text">
            <h1 className="main_text-heading">{t("resources.crop.title")}</h1>
            <p>{t("resources.crop.sub")}</p>
            <ul>
              <li className="rescource-txt">{icon} {t("resources.crop.des1")}</li>
              <li className="rescource-txt">{icon} {t("resources.crop.des2")}</li>
              <li className="rescource-txt">{icon} {t("resources.crop.des3")}</li>
              <li className="rescource-txt">{icon} {t("resources.crop.des4")}</li>
              <li className="rescource-txt">{icon} {t("resources.crop.des5")}</li>
            </ul>
          </div>
        </section>
        <hr className="hr" />
        <section className="hero">
          <div className="main_text">
            <h1 className="main_text-heading">{t("resources.animal.title")}</h1>
            <p>{t("resources.animal.sub")}</p>
            <ul>
              <li className="rescource-txt">{icon} {t("resources.animal.des1")}</li>
              <li className="rescource-txt">{icon} {t("resources.animal.des2")}</li>
              <li className="rescource-txt">{icon} {t("resources.animal.des3")}</li>
              <li className="rescource-txt">{icon} {t("resources.animal.des4")}</li>
              <li className="rescource-txt">{icon} {t("resources.animal.des5")}</li>
            </ul>
          </div>
          <div className="main_img">
            <img src="/resourcesImg/28069.webp" alt="main_img" />
          </div>
        </section>
        <hr className="hr" />
        <section className="hero al">
          <div className="main_img">
            <img src="/resourcesImg/59Z_2112.w009.n001.61A.p25.61.webp" alt="main_img" />
          </div>
          <br />
          <div className="main_text">
            <h1 className="main_text-heading">{t("resources.tech.title")}</h1>
            <p>{t("resources.tech.sub")}</p>
            <ul>
              <li className="rescource-txt">{icon} {t("resources.tech.des1")}</li>
              <li className="rescource-txt">{icon} {t("resources.tech.des2")}</li>
              <li className="rescource-txt">{icon} {t("resources.tech.des3")}</li>
              <li className="rescource-txt">{icon} {t("resources.tech.des4")}</li>
              <li className="rescource-txt">{icon} {t("resources.tech.des5")}</li>
            </ul>
          </div>
        </section>
      </main>

    </>
  );
};

export default Resources;