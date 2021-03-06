import React, {useContext, useEffect, useState} from 'react';
import Header from "../components/headers/header/Header";
import Footer from "../components/footer/footer/Footer";
import {Context} from "../index";
import cl from './styles/Template.module.scss'
import {observer} from "mobx-react-lite";
import HeaderMobile from "../components/headers/headerMobile/HeaderMobile";
import {useLocation, useNavigate} from "react-router-dom";
import ModalCall from "../components/modals/modalCall/ModalCall";
import SliderOffers from "../components/sliders/sliderOffers/SliderOffers";
import Path from "../components/path/Path";

const Template = ({children, path}) => {

    const [modal, setModal] = useState(false)
    const [access, setAccess] = useState(false)

    const {States} = useContext(Context)

    const {Favorites} = useContext(Context)
    const {Basket} = useContext(Context)
    const {Auth} = useContext(Context)
    const {History} = useContext(Context)

    useEffect(() => {
        Favorites.init(Auth.db, Auth.user.uid)
        Basket.init(Auth.db, Auth.user.uid)
        History.init(Auth.db, Auth.user.uid)
    }, [Auth.isAuth])

    return (
        <div
            className={cl.wrap}
            onClick={() => {
                States.setModalSearch(false)
            }}
        >
            {States.modalSearchMobileBack ?
                <div className={cl.modalBack}></div>
                :
                null
            }
        <div>
            <Header/>
            <HeaderMobile setModal={setModal}/>
            {path ?
                <Path path={path}/>
                :
                null
            }
            <div className='container'>
                {children}
            </div>
        </div>
        <Footer/>
        {modal ?
            <ModalCall isActive={modal} setActive={setModal} setAccess={setAccess}/>
            :
            null
        }
        </div>
    );
};

export default observer(Template);