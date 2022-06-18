import React, {useContext} from 'react';
import Header from "../components/headers/header/Header";
import Footer from "../components/footer/footer/Footer";
import {Context} from "../index";
import cl from '../styles/Template.module.scss'
import {observer} from "mobx-react-lite";
import HeaderMobile from "../components/headers/headerMobile/HeaderMobile";

const Template = ({children}) => {

    const {States} = useContext(Context)

    return (
        <div
            onClick={() => {
            States.setModalSearch(false)
            }}
            style={{
                paddingTop: 64,
                position: 'relative'
            }}
        >
            {States.modalMobileBack ?
                <div className={cl.modalBack}></div>
                :
                null
            }
        <Header/>
        <HeaderMobile/>
            <div className='container'>
            {children}
        </div>
        <Footer/>
        </div>
    );
};

export default observer(Template);