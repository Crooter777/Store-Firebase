import React from 'react';
import Header from "../components/headers/header/Header";
import Footer from "../components/footer/footer/Footer";

const Template = ({children}) => {
    return (
        <>
        <Header/>
        <div className='container'>
            {children}
        </div>
        <Footer/>
        </>
    );
};

export default Template;