import React, {useContext} from 'react';
import Header from "../components/headers/header/Header";
import Footer from "../components/footer/footer/Footer";
import {Context} from "../index";

const Template = ({children}) => {

    const {States} = useContext(Context)

    return (
        <div onClick={() => {
            States.setModalSearch(false)
        }}>
        <Header/>
        <div className='container'>
            {children}
        </div>
        <Footer/>
        </div>
    );
};

export default Template;