import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";



const App = () => {

return(
    <div className="bg-darkMode text-white font-poppins">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
            </BrowserRouter>
    </div>
)

}

export default App;