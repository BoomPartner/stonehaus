"use client";
import React from 'react'
import ComponentNavbar from '@/components/Navbar';
import ComponentFooter from '@/components/Footer';
import GlobalState from './context/GlobalState';
import Whats from '@/components/Whats';
const Provider = ({ children }) => {
    return (

        <GlobalState>
            <ComponentNavbar></ComponentNavbar>

                {children}

            <ComponentFooter></ComponentFooter>
            <Whats/>

        </GlobalState>

    )
}

export default Provider