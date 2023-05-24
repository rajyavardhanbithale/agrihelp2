import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './scheme.css'
function Scheme() {
  const { t } = useTranslation();
  const data = [
    {
      image: "/schemeImg/pmf.png",
      alt: "pmfby_image",
      text: "PMFBY",
      link: "https://pmfby.gov.in/"
    },
    {
      image: "/schemeImg/enam.png",
      alt: "nam_img",
      text: "NAM",
      link: "https://www.enam.gov.in/web/"
    },
    {
      image: "/schemeImg/pmks.jpeg",
      alt: "PMKSNY_img",
      text: "PMKSNY",
      link: "https://pmkisan.gov.in/"
    },
    {
      image: "/schemeImg/cg.jpg",
      alt: "PMKSNY_img",
      text: "PMKSY",
      link: "http://www.creda.in/"
    },
    {
      image: "/schemeImg/pmksy.jpeg",
      alt: "ssy_img",
      text: "SSY",
      link: "https://pmksy.gov.in/"
    }


  ];


  return (
    <>
      <main className='shopfrmt'>

        <p class="h1 mb-0 mt-5">{t("scheme.title")}</p>

        <div className="album py-5 bg-body-tertiary">
          <div className="backDiv m-3">
            <Link to="/home" className="custom-button-back">
              <i class="fas fa-arrow-alt-circle-left "></i>
              <span>  {t("backToHome.title")}</span>

            </Link>
          </div>

          <div className='sec'>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {data.map((item, index) => (
                  <div className="col" key={index}>
                    <Card className="h-100 d-flex flex-column justify-content-between">
                      <Card.Title style={{ margin: '15px', fontWeight: 'bold' }}>{t(`scheme-data.${index}.text`)}</Card.Title> {/* Add the title here */}
                      <Card.Img src={item.image} alt={item.alt} className="card-img-top" />
                      <Card.Body>
                        <Card.Title>{t(`scheme-data.${index}.sub`)}</Card.Title>
                      </Card.Body>
                      <Card.Footer className="bg-white">
                        <Button href={item.link} className="custom-button" target="_blank">
                          {t('visit.title')}
                          <i className="fas fa-arrow-circle-right ml-1"></i>
                        </Button>
                      </Card.Footer>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>




    </>
  );
};

export default Scheme;