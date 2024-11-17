import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import whtImg from "../images/whatsapp (2).png";
import instImg from "../images/insta.png";
import houzzImg from "../images/houzz.png";

const ContactUs = () =>{
    return(
        <div>
        <Navbar />
        <div id="contact-us" className="pt-10">
        <div className="flex flex-col gap-5 lg:px-20 px-10 lg:py-20 py-16 items-center bg-costumYellow min-h-screen">
         <h1 className="text-5xl font-bold text-darkMode">Contact Us</h1>
         <ul className="flex flex-col text-center items-center gap-3">
            <li className="font-semibold text-darkMode">info@deacontractors.com</li>
            <div className="flex gap-10">
            <li className="size-6">
            <a href="https://www.houzz.com/professionals/kitchen-and-bath-remodelers/dea-contractor-pfvwus-pf~223051029?">
               <img src={houzzImg} alt="houzz" />
               </a>
            </li>
            <li className="size-9">
               <a href="https://www.instagram.com/dea_contractor.llc/">
                  <img src={instImg} alt="instagram" />
               </a>
            </li>
            <li className="size-9">
                  <img src={whtImg} alt="whatsapp" />
            </li>
            </div>
            <li className="font-semibold text-darkMode"> 929-304-5757</li>
         </ul>
         <div className="flex flex-col gap-5 lg:w-1/2 w-full text-darkMode">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Phone number(optional)" />
            <textarea placeholder="How can we help you?" className="h-36" />
         </div>
         <button className="bg-gradient-to-t from-darkMode to-costumDark hover:bg-gradient-to-t hover:from-costumDark hover:to-darkMode
      px-6 py-3 text-3xl font-bold text-costumYellow rounded-md">Submit</button>
      <h1 className="font-semibold text-darkMode text-center text-2xl">Write us a message, and we will get back to you as soon as possible!</h1>
      </div>
        <Footer />
        </div>
        </div>
    )
}

export default ContactUs;