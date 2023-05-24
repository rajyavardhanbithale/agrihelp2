import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './agrishop.css'
import { useTranslation } from 'react-i18next';



function Equipment() {

    const { t } = useTranslation();

    const shopItems = [
        {
            image: 'https://www.mahindrafarmequipment.com/images/farmer/152265373920180402.jpg',
            alt: '',
            text: 'Mahindra Farm Equipment by (Mahindra Rise....)',
            link: 'https://www.mahindrafarmequipment.com/'
        },
        {
            image: 'https://escorts.scene7.com/is/image/escorts/Powertrac-Offer2?$dm-responsive$',
            alt: 'image 2',
            text: 'Powertrac ....',
            link: 'https://www.powertracagri.com/in/en/'
        },
        {
            image: 'https://www.tractorjunction.com/assets/images/logo/TJ_LOGO_en.svg',
            alt: 'TractorJunction | Home',
            text: 'Tractor Junction (third-party seller agri_equip)',
            link: 'https://www.tractorjunction.com/'
        },
        {
            image: 'https://5.imimg.com/data5/SELLER/Default/2020/11/WJ/YM/VZ/55306345/eicher-agristar-7-feet-48-blades-rototiller-500x500.jpg',
            alt: 'Eicher Agristar 7 Feet 48 Blades Rototiller',
            text: 'Eicher agri solution',
            link: 'https://www.indiamart.com/eicher-tractors/eicher-implements-and-farm-equipments.html'
        },
        {
            image: 'shopImg/tractred.webp',
            alt: '',
            text: 'Kubota Agricultural Machinery India',
            link: 'https://www.kubota.co.in/'
        },
        {
            image: 'https://international.sonalika.com/wp-content/uploads/2020/09/6-2-300x300.jpg',
            alt: 'Rotavator Mini Hybrid Xtra Series',
            text: 'Sonalika Agri Equipment',
            link: 'https://international.sonalika.com/implements/'
        }
    ];



    return (
        <>
            <main className='shopfrmt'>

                <p class="h1 mb-0 mt-5">{t("equip-shop.equipmentShop")}</p>

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
                                                <Card.Title>{t(`equipItems.${index}.text`)}</Card.Title>
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

export default Equipment;
