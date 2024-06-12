"use client";
import { useEffect, useState } from "react";
import globalContext from "./globalContext";

const GlobalState = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(0)
    const [bgWhite, setBgWhite] = useState(false);
    const [nosotros, setNosotros] = useState(false);
    const [contacto,setContacto] = useState(false)
    const [language,setLanguage] = useState(false)

    const handleWindow = () => {
        const widthWindow = window.innerWidth;
        setWindowWidth(widthWindow)

    }
    
    useEffect(() => {
        if (typeof window !== undefined) {
            setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleWindow)

            return () => window.removeEventListener("resize", handleWindow)
        }
    }, [])

    useEffect(() => {

        const handleScroll = () => {
            // Cambia el color de fondo si el scroll supera 300px, por ejemplo
            const isWhite = window.scrollY > 500;
            setBgWhite(isWhite);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    return (
        <globalContext.Provider value={{ windowWidth, bgWhite, nosotros, contacto, language, setLanguage, setNosotros, setBgWhite, setContacto  }}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalState