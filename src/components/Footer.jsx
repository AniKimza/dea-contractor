import React from "react";
import deaLogo from "../images/DeaLogo1.png";

const Footer = () => {
    return (
        <div className="relative flex flex-col lg:flex-row gap-7 justify-between items-center lg:px-20 px-10 py-16 bg-costumDark">
            {/* <h1 className="text-center lg:text-5xl text-4xl font-bold pt-1/2 text-costumYellow">Dea Contractor</h1> */}
            <img src={deaLogo} alt="dea-logo" className="max-w-xs h-auto"/>
            <div className="flex justify-between lg:gap-20 gap-10 font-semibold">
                <ul className="flex flex-col items-center lg:gap-4 gap-1">
                    <li><a href="https://www.instagram.com/dea_contractor.llc/">Instagram</a></li>
                    <li>Whatsapp</li>
                    <li><a href="https://www.houzz.com/professionals/kitchen-and-bath-remodelers/dea-contractor-pfvwus-pf~223051029?">Houzz</a></li>
                </ul>
                <ul className="flex flex-col items-center lg:gap-4 gap-1">
                    <li>US Tel: 929-304-5757</li>
                    <li>info@deacontractors.com</li>
                    <li>Ann Arbor, Michigan, USA</li>
                </ul>
            </div>
            <h1 className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center">© 2023. Dea Contractor LLC All Rights Reserved</h1>
        </div>
    )
}

export default Footer;