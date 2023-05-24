import React from 'react';
import { useTranslation } from 'react-i18next';

import './buy.css'
import './c.css'
import Formbs from './Formbs'
import { Link } from 'react-scroll';
function Buysell() {
    const { t } = useTranslation();

    const rowData = [
        {
            sno: 1,
            name: "Raj Kumar",
            phone: "+91 9623658978",
            email: "rajkumar@gmail.com",
            item: "1 Ton Wheat",
            location: "Balaghat/MP",
        },
        {
            sno: 2,
            name: "Rajesh Singh",
            phone: "+91 9876543210",
            email: "sing@raj.com",
            item: "Tractor Rent",
            location: "Prayagraj/UP",
        },
        {
            sno: 3,
            name: "Rajesh Sharma",
            phone: "+91 9884546210",
            email: "",
            item: "Fertilizer",
            location: "Chennai/TN",
        },
        // Add more objects for additional rows
    ];


    return (
        <>
            <div className="album py-5 bg-body-tertiary">
                <div className="backDiv  mb-0">
                    <Link to="#section1" className="custom-button-back" smooth={true} duration={300}>
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        <span>  {t("buy.av")}</span>

                    </Link>
                </div>
            </div>
            <h1 class="text-5xl font-extrabold text-center dark:text-white  mb-6">{t("buy.main")}</h1>
            <Formbs />
            <br />
            <br /><br /><br />
            <br /><br />

            <section className="feedback" id="#section1">
                <div className="container-form">
                    <div className="text">{t("buy.av")}</div>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>{t("buy.frm.so")}</th>
                                    <th>{t("buy.frm.name")}</th>
                                    <th>{t("buy.frm.ph")}</th>
                                    <th>{t("buy.frm.em")}</th>
                                    <th>{t("buy.frm.it")}</th>
                                    <th>{t("buy.frm.loc")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rowData.map((row) => (
                                    <tr key={row.sno}>
                                        <td>{row.sno}</td>
                                        <td>{row.name}</td>
                                        <td>{row.phone}</td>
                                        <td>{row.email}</td>
                                        <td>{row.item}</td>
                                        <td>{row.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Buysell;