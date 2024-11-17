import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bathroom from "../gallery/bathroom.jpeg";
import kitchen from "../gallery/kitchen.jpeg";
import mix from "../gallery/mix.png";

const Portfolio = () => {

    const bathrooms = [
        { name: 'Farmhouse Primary Bath Pinckney', link: bathroom },
        { name: 'Modern Bathroom Ann Arbor', link: bathroom },
        { name: 'Mid Century Modern Bathroom Ann Arbor', link: bathroom },
        { name: 'Modern Gothic Bathroom Ypsilanti', link: bathroom },
        { name: 'Transitional Modern Bathroom Canton', link: bathroom },
        { name: 'Modern Bathroom', link: bathroom }
    ]

    const kitchens = [
        { name: 'Modern Kitchen Ypsilanti', link: kitchen },
        { name: 'Modern Kitchen Canton', link: kitchen },
        { name: 'Transitional', link: kitchen },
        { name: 'Traditional Kitchen', link: kitchen },
        { name: 'Modern Kitchen', link: kitchen },
    ]

    const mixes = [
        { name: 'Commercial Paint', link: mix },
        { name: 'Accent Wall + Flooring', link: mix },
        { name: 'Fireplace', link: mix },
        { name: 'Laundry Room', link: mix }
    ]

    return (
        <div>
            <Navbar />
            <div id="portfolio" className="flex flex-col lg:px-20 px-10 pt-28 lg:gap-5 gap-3 text-center sm:text-left md:w-2/3">
                <h1 className="lg:text-5xl text-4xl text-costumYellow font-bold">Our Work</h1>
                <h1 className="lg:text-xl text-base lg:font-semibold">We partner with homeowners and businesses, providing expert residential and commercial remodeling.
                    From start to finish, we bring clients’ visions to life with exceptional craftsmanship.
                    Explore our notable remodeling projects.</h1>
            </div>
            <div className="flex flex-col lg:px-20 px-10 py-20 gap-28">
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl font-semibold text-costumYellow">Bathrooms</h1>
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
                        {bathrooms.map((item, index) => (
                            <div key={index}>
                                <img alt="bathroom" src={item.link} className="rounded-md" />
                                <h1 className="lg:text-4xl text-xl text-center">{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl font-semibold text-costumYellow">Kitchens</h1>
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
                        {kitchens.map((item, index) => (
                            <div key={index}>
                                <img alt="kitchen" src={item.link} className="rounded-md" />
                                <h1 className="lg:text-4xl text-xl text-center">{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl font-semibold text-costumYellow">Mix</h1>
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
                        {mixes.map((item, index) => (
                            <div key={index}>
                                <img alt="mix" src={item.link} className="rounded-md" />
                                <h1 className="lg:text-4xl text-xl text-center">{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio;