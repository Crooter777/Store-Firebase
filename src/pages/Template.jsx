import React, {useContext} from 'react';
import Header from "../components/headers/header/Header";
import Footer from "../components/footer/footer/Footer";
import {Context} from "../index";
import cl from './styles/Template.module.scss'
import {observer} from "mobx-react-lite";
import HeaderMobile from "../components/headers/headerMobile/HeaderMobile";
import {useNavigate} from "react-router-dom";

const Template = ({children, path}) => {

    const {States} = useContext(Context)
    const navigate = useNavigate()

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
            <HeaderMobile/>
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
            <div className='container'>
                {children}
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default observer(Template);