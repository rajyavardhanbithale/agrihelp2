import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './agrishop.css'
import { useTranslation } from 'react-i18next';

function Fertilizer() {

    const { t } = useTranslation();

    const shopItems = [
        {
            image: '/shopImg/dfgov.webp',
            alt: 'seedbasket logo',
            text: 'Department of Fertilizer Govt. of India',
            link: 'https://www.fert.nic.in/faq',
        },
        {
            image: '/shopImg/National_Fertilizers_Logo.svg.webp',
            alt: 'seed',
            text: 'national fertilizers ltd',
            link: 'https://nationalfertilizers.com/#',
        },
        {
            image: '/shopImg/bighat.webp',
            alt: 'seed',
            text: 'bighaat',
            link: 'https://www.bighaat.com/',
        },
        {
            image: '/shopImg/kursi.webp',
            alt: 'seed',
            text: 'krushikendra',
            link: 'https://www.krushikendra.com/',
        },
        {
            image: '/shopImg/iffco.webp',
            alt: 'seed',
            text: 'iffcobazar',
            link: 'https://www.iffcobazar.in/',
        },
        {
            image: '/shopImg/agritel.webp',
            alt: 'seed',
            text: 'agritell',
            link: 'https://www.agritell.com/',
        },
    ];


    return (
        <>
            <main className='shopfrmt'>

                <p class="h1 mb-0 mt-5">{t("fertilizer-shop.fertilizerShop")}</p>

                <div className="album py-5 bg-body-tertiary">
                    <div className="backDiv m-3">
                        <Link to="/shop" className="custom-button-back">
                            <i class="fas fa-arrow-alt-circle-left "></i>
                            <span>  {t("main-shop.backToShop")}</span>

                        </Link>
                    </div>
                    <div className='sec'>
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {shopItems.map((item, index) => (
                                    <div className="col" key={index}>
                                        <Card className="h-100 d-flex flex-column justify-content-between"> {/* Add d-flex and flex-column classes */}
                                            <Card.Img src={item.image} alt={item.alt} className="card-img-top" />
                                            <Card.Body>
                                                <Card.Title>{t(`fertilizerShopItems.${index}.text`)}</Card.Title>
                                            </Card.Body>
                                            <Card.Footer className="bg-white">
                                                <Button href={item.link} className="custom-button" target="_blank" >  {t("main-shop.buttonView")} <i className="fas fa-arrow-circle-right ml-1"></i> </Button>
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
}

export default Fertilizer;
