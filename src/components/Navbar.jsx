import React, { useEffect, useRef, useState } from "react";
import deaLogo from "../images/DeaLogo3.png";
import MenuButton from "./MenuButton";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";




const Navbar = () => {

    const location = useLocation();

    const navItems = [
        { name: "Home", link: location.pathname === "/home" || location.pathname === "/" ? "#home" : "/home" },
        { name: 'Our Work', link: location.pathname === "/portfolio" ? "#portfolio" : "/portfolio" },
        { name: 'Contact Us', link: location.pathname === "/contact-us" ? "#contact-us" : "/contact-us" }
    ]

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null)


    const closeMenu = () => {
        setIsOpen(false);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex justify-between items-center lg:px-20 px-10 py-3 bg-costumDark fixed w-full">
            <a className="text-4xl font-bold text-costumYellow" href={location.pathname === "/home" || location.pathname === "/" ? "#home" : "/home"} ><img src={deaLogo} alt="dea-logo" className="max-w-16 h-auto" /></a>
            <ul className="hidden sm:flex gap-10 text-2xl font-semibold">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a
                            className="hover:text-costumYellow text-white"
                            href={item.link}
                        >
                            {item.name}
                        </a>
                    </li>
                )
                )}
            </ul>
            <div ref={buttonRef} className="sm:hidden">
            <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        ref={dropdownRef}
                        className="absolute top-14 right-10 w-52 h-64 bg-costumDark text-2xl text-white text-center font-semibold rounded-md"
                        initial={{ height: 0, opacity: 1 }}
                        animate={{ height: '16rem', opacity: 1 }}
                        exit={{ height: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {navItems.map((item, index) => (
                            <li key={index} className="w-full h-1/3">
                                <motion.a
                                    href={item.link}
                                    className="flex items-center justify-center w-full h-full"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: '100%', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </motion.a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    )

}

export default Navbar;