import React from 'react';
import { useTranslation } from 'react-i18next';

function Imgsat() {
    const {t} = useTranslation();
    return (
        <>
        <h1 class="text-5xl font-extrabold text-center dark:text-white m-5 mb-6">{t("ext.sat")}</h1>
        <div class="d-flex justify-content-center align-items-center">
            
            <img src="https://mausam.imd.gov.in/Satellite/3Dasiasec_ir1.jpg" alt="Your Image" style={{ width: '40%', objectFit: 'contain' }} />
            
            
        </div>     
        <h1 class="text-5xl font-extrabold text-center dark:text-white m-5 mb-6">{t("ext.sat")}</h1>  
         <div class="d-flex justify-content-center align-items-center">
            
         <img src="https://mausam.imd.gov.in/Satellite/Converted/IR1.gif" alt="Your Image" style={{ width: '40%', objectFit: 'contain' }} />
            
            
        </div>
        </>
    );
};

export default Imgsat;