import React from "react";
import whtImg from "../images/whatsapp (2).png";
import instImg from "../images/insta.png";
import houzzImg from "../images/houzz.png";

const Contact = () => {
   return (
      <div className="flex flex-col lg:gap-7 gap-3 lg:px-20 px-10 lg:py-16 py-10 items-center bg-costumYellow">
         <h1 className="text-5xl font-bold text-darkMode">Contact Us</h1>
         <ul className="flex gap-5">
            <li className="font-semibold text-darkMode">info@deacontractors.com</li>
            <li className="size-9">
               <img src={whtImg} alt="whatsapp" />
            </li>
            <li className="size-9">
               <a href="https://www.instagram.com/dea_contractor.llc/">
                  <img src={instImg} alt="instagram" />
               </a>
            </li>
            <li className="size-6">
               <a href="https://www.houzz.com/professionals/kitchen-and-bath-remodelers/dea-contractor-pfvwus-pf~223051029?">
                  <img src={houzzImg} alt="houzz" />
               </a>
            </li>
         </ul>
         <div className="flex flex-col gap-3 lg:w-1/2 w-full text-darkMode">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Phone number(optional)" />
            <textarea placeholder="How can we help you?" className="h-36" />
         </div>
         <button className="bg-gradient-to-t from-darkMode to-costumDark hover:bg-gradient-to-t hover:from-costumDark hover:to-darkMode
      px-6 py-3 text-3xl font-bold text-costumYellow rounded-md">Submit</button>
      </div>
   )
}

export default Contact;