import React from "react";
import { useNavigate } from "react-router-dom";
import deaLogo from "../images/DeaLogo1.png";
import hero from '../gallery/hero.png';



const Hero = () => {

    const navigate = useNavigate();

    const naviPort = () => {
        navigate("/portfolio");
    }

    return (
        <div id="home" className="flex flex-col pt-32 pb-20 lg:px-20 px-10 gap-7">
                <div className="flex flex-col gap-7">
                    <img src={deaLogo} alt="dea-logo" className="max-w-md h-auto" />
                    <h1 className="xl:w-1/2 xl:text-lg text-sm lg:font-semibold">Dea Contractor LLC, licensed (#262400371) and insured, is a full-service residential and commercial remodeling company
                        dedicated to delivering exceptional customer service and craftsmanship in the Ann Arbor area.
                        We start with a consultation to understand your needs, followed by a custom design tailored to your functional and aesthetic goals, budget, and timeline.
                        Once approved, we move forward with construction to bring your vision to life.
                        <a href="./contact-us" className="text-costumYellow"> Email </a>us today for a personalized quote. Visit our
                        <a href="https://www.houzz.com/professionals/kitchen-and-bath-remodelers/dea-contractor-pfvwus-pf~223051029?" className="text-costumYellow" > Houzz </a>
                        profile here. Check our work by pressing the button below</h1>
                </div>
            <div className="flex gap-7 justify-center items-center sm:block">
                <button onClick={naviPort}>
                    <div className="bg-gradient-to-t from-yellow-900 to-costumYellow 
            hover:bg-gradient-to-t hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-900 
            px-3 py-2 rounded-md">
                        <h1 className="text-3xl font-bold text-darkMode">Portfolio</h1>
                    </div>
                </button>
            </div>
        </div>
    )

}

export default Hero;