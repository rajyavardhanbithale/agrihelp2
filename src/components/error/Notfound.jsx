import React from 'react';
import './error.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Notfound() {
  const {t} = useTranslation();
  return (
    <div>
      <div className="container-error">
        <p className="text-error">{t("error.404.title")}</p>
        <br />
        <h1 className="num-error">{t("error.404.num")}</h1>
        <p className="text">{t("error.404.sub")}</p>
        <br />
        
        <Link to="/" className="color-error">
        {t("error.404.bth")}  &nbsp;&nbsp; <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                        </Link>
      </div>
    </div>
  );
};

export default Notfound;