import React from 'react';

import './pest.css'
import { useTranslation } from 'react-i18next';
function Pestcontrol() {
    const {t} = useTranslation();

    const pestData = [
        {
            "image": "/pestImg/bollworm.jpg",
            "title": "BOLLWORM",
            "description": "des1",
            "link": "https://en.wikipedia.org/wiki/Bollworm"
        },
        {
            "image": "/pestImg/Aphids.jpg",
            "title": "APHIDS",
            "description": "des2",
            "link": "https://en.wikipedia.org/wiki/Aphid"
        },
        {
            "image": "/pestImg/whiteflies.jpg",
            "title": "WHITEFLIES",
            "description": "des3",
            "link": "https://en.wikipedia.org/wiki/Whitefly"
        },
        {
            "image": "/pestImg/grasshoppers.jpg",
            "title": "GRASSHOPPERS",
            "description": "des4",
            "link": "https://en.wikipedia.org/wiki/Grasshopper"
        },
        {
            "image": "/pestImg/leafhoppers.jpg",
            "title": "LEAFHOPPER",
            "description": "des5",
            "link": "https://en.wikipedia.org/wiki/Leafhopper"
        },
        {
            "image": "/pestImg/Armyworm.jpg",
            "title": "ARMYWORM",
            "description": "des6",
            "link": "https://en.wikipedia.org/wiki/Fall_armyworm"
        },
        {
            "image": "/pestImg/termites.jpg",
            "title": "TERMITES",
            "description": "des7",
            "link": "https://en.wikipedia.org/wiki/Termite"
        },
        {
            "image": "/pestImg/mites.jpg",
            "title": "MITES",
            "description": "des8",
            "link": "https://en.wikipedia.org/wiki/Mite"
        },
        {
            "image": "/pestImg/Jassids.jpg",
            "title": "JASSIDS",
            "description": "des9",
            "link": "https://en.wikipedia.org/wiki/Amrasca_biguttula"
        },
        {
            "image": "/pestImg/stem borers.jpg",
            "title": "STEMBORERS",
            "description": "des10",
            "link": "https://en.wikipedia.org/wiki/Stemborer"
        }
    ]

    return (
        <>
        <h1 class="text-5xl font-extrabold text-center dark:text-white m-5 mb-6">{t("pest.title")}</h1>
        <div className="container">
            <div className="group">
                {pestData.map((pest, index) => (
                    <list className="list" key={index}>
                        <div className="top">
                            <img src={pest.image} alt="" />
                        </div>
                        <div className="center">
                            <a href={pest.link} className="label">
                                {pest.name}
                            </a>
                            <p className="desc">{t(`pest.pest-data.${pest.description}`)}</p>
                        </div>
                    </list>
                ))}
            </div>
        </div>
        </>
    );
};

export default Pestcontrol;