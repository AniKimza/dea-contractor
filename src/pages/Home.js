import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Comments from "../components/Comments";
import Footer from "../components/Footer";
import Contact from "../components/Contact";


const Home = () => {

return(
    <div>
            <Navbar />
            <Hero />
            <Comments />
            <Contact />
            <Footer />
    </div>
)

}

export default Home;