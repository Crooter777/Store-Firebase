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

const Template = ({children, path}) => {

    const [modal, setModal] = useState(false)
    const [access, setAccess] = useState(false)

    const {States} = useContext(Context)
    const navigate = useNavigate()

    const [isMain, setMain] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            setMain(true)
        } else {
            setMain(false)
        }
    }, [location])

    return (
        <div
            className={cl.wrap}
            onClick={() => {
                States.setModalSearch(false)
            }}
        >
            {States.modalMobileBack ?
                <div className={cl.modalBack}></div>
                :
                null
            }
        <div>
            <Header/>
            <HeaderMobile setModal={setModal}/>
            {path ?
                <div className={cl.pathWrap}>
                    <div className={cl.inner}>
                        {path.map((p, index, array) =>
                            index !== array.length -1 ?
                                <div key={index}>
                                    <span className={cl.crosh} onClick={() => navigate(p.path)}>{p.page}</span>
                                    <span className={cl.croshLine}>/</span>
                                </div>
                                :
                                <span key={index} className={cl.croshCurrent} onClick={() => navigate(p.path)}>{p.page}</span>

                        )}
                    </div>
                </div>
                :
                null
            }
            {isMain ?
                <SliderOffers/>
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