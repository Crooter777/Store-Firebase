import React, {useContext, useEffect, useState} from 'react';
import cl from './HeaderMobile.module.scss'
import LogoSVG from "../../SVG/LogoSVG";
import SearchSVG from "../../SVG/SearchSVG";
import CloseSVG from "../../SVG/CloseSVG";
import FavoriteSVG from "../../SVG/FavoriteSVG";
import ProductCartSVG from "../../SVG/ProductCartSVG";
import Telegram2SVG from "../../SVG/Telegram2SVG";
import Whatsapp2SVG from "../../SVG/Whatsapp2SVG";
import Phone2SVG from "../../SVG/Phone2SVG";
import SearchMobile from "../../search/mobile/SearchMobile";
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {observer} from "mobx-react-lite";

const HeaderMobile = ({setModal}) => {

    const {States} = useContext(Context)
    const {Auth} = useContext(Context)
    const {Favorites} = useContext(Context)
    const {Basket} = useContext(Context)

    const navigate = useNavigate()

    const [isActive, setActive] = useState(false)

    const [mobSearch, setMobSearch] = useState(false)

    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(true)

    function handlerSearch(bool) {
        States.setModalMobile(bool)
        States.setModalMobileBack(bool)
    }

    async function load() {
        const response = await axios.get('http://localhost:8000/contacts/')
        setData(response.data[0])
        setLoading(false)
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <div className={cl.wrap}>
            <div className={cl.inner}>
                {States.modalSearchMobile ?
                    <SearchMobile/>
                    :
                    null
                }
                <div
                    className={cl.burger}
                    onClick={(e) => {
                        setActive(true)
                    }}
                >
                    <div className={cl.line}></div>
                    <div className={cl.line}></div>
                    <div className={cl.line}></div>
                </div>
                <LogoSVG onClick={() => navigate('/')} style={{width: '99px', cursor: 'pointer'}}/>
                <div>
                    {States.modalSearchMobile ?
                        <CloseSVG
                            style={{width: 18, height: 18, cursor: 'pointer'}}
                            onClick={() => handlerSearch(false)}

                        />
                        :
                        <SearchSVG
                            style={{cursor: 'pointer'}}
                            onClick={() => handlerSearch(true)}
                        />
                    }
                </div>
                <div
                    className={isActive ? `${cl.windowBack} ${cl.active}` : cl.windowBack}
                    onClick={() => {
                        setActive(false)
                    }}
                >
                    <div
                        className={cl.window}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >
                        <div className={cl.topNav}>
                            <div className={cl.title}>
                                <h3>Меню</h3>
                                <CloseSVG
                                    style={{cursor: 'pointer'}}
                                    onClick={() => {
                                        setActive(false)
                                    }}
                                />
                            </div>
                            <div className={cl.section}>
                                {Auth.isAuth ?
                                    <>
                                    <span onClick={async () => {
                                        Auth.logout()
                                        Favorites.products = []
                                        Basket.products = []
                                    }}
                                    >
                                        Выйти
                                    </span>
                                    <span onClick={() => {
                                    navigate('/history')
                                }}
                                    >
                                    История покупок
                                    </span>
                                    </>
                                    :
                                    <span onClick={async () => {
                                        await Auth.login()
                                        Favorites.init(Auth.db)
                                    }}
                                    >
                                        Войти
                                    </span>
                                }

                                <span onClick={() => navigate('/about')}>О нас</span>
                                <span onClick={() => navigate('/collections')}>Коллекции</span>
                                <span onClick={() => navigate('/news')}>Новости</span>
                            </div>
                            <div className={cl.separator}></div>
                            <div className={cl.favorite}>
                                <FavoriteSVG style={{width: 16, height: 16}}/>
                                <span onClick={() => navigate('/favorites')}>Избранное</span>
                            </div>
                            <div className={cl.productCart}>
                                <ProductCartSVG style={{width: 16, height: 16}}/>
                                <span onClick={() => navigate('/basket')}>Корзина</span>
                            </div>
                        </div>
                        <div className={cl.bottomNav}>
                            <div className={cl.contactTitle}>
                                Свяжитесь с нами
                            </div>
                            <div className={cl.contact}>
                                <span>Тел:</span>
                                <a href='tel:+996000000000'>+996 000 00 00 00</a>
                            </div>
                            <div className={cl.social}>
                                {!isLoading ?
                                    <>
                                        <a href={data.telegram} target="_blank"><Telegram2SVG/></a>
                                        <a href={data.whatsapp} target="_blank"><Whatsapp2SVG/></a>
                                        <Phone2SVG onClick={() => {
                                            setModal(true)
                                        }}/>
                                    </>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(HeaderMobile);