import React, {useContext, useState} from 'react';
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

const HeaderMobile = () => {

    const {States} = useContext(Context)

    const [isActive, setActive] = useState(false)

    const [mobSearch, setMobSearch] = useState(false)

    function handlerSearch(bool) {
        States.setModalMobile(bool)
        States.setModalMobileBack(bool)
    }

    return (
        <div className={cl.wrap}>
            <div className={cl.inner}>
                {States.modalMobile ?
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
                <LogoSVG style={{width: '99px'}}/>
                <div>
                    {States.modalMobile ?
                        <CloseSVG
                            style={{width: 18, height: 18}}
                            onClick={() => handlerSearch(false)}
                        />
                        :
                        <SearchSVG onClick={() => handlerSearch(true)}/>
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
                                    onClick={() => {
                                        setActive(false)
                                    }}
                                />
                            </div>
                            <div className={cl.section}>
                                <span>О нас</span>
                                <span>Новости</span>
                                <span>Коллекция</span>
                            </div>
                            <div className={cl.separator}></div>
                            <div className={cl.favorite}>
                                <FavoriteSVG style={{width: 16, height: 16}}/>
                                <span>Избранное</span>
                            </div>
                            <div className={cl.productCart}>
                                <ProductCartSVG style={{width: 16, height: 16}}/>
                                <span>Корзина</span>
                            </div>
                        </div>
                        <div className={cl.bottomNav}>
                            <div className={cl.contactTitle}>
                                Свяжитесь с нами
                            </div>
                            <div className={cl.contact}>
                                <span>Тел:</span>
                                <span> +996 000 00 00 00</span>
                            </div>
                            <div className={cl.social}>
                                <Telegram2SVG/>
                                <Whatsapp2SVG/>
                                <Phone2SVG/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMobile;