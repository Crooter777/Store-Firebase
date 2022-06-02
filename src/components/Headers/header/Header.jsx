import React from 'react';
import cl from './Header.module.scss'
import LogoSVG from "../../SVG/LogoSVG";
import SearchSVG from "../../SVG/SearchSVG";
import FavoriteSVG from "../../SVG/FavoriteSVG";
import ProductCartSVG from "../../SVG/ProductCartSVG";
import HeaderMobile from "../headerMobile/HeaderMobile";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className={cl.header}>
                <div className={cl.topHeader}>
                    <div className={cl.topHeaderInner}>
                        <div className={cl.pages}>
                            <span>О нас</span>
                            <span>Коллекции</span>
                            <span>Новости</span>
                        </div>
                        <div className={cl.contact}>
                            <span>Тел: </span>
                            <span>+996 000 00 00 00</span>
                        </div>
                    </div>
                </div>
                <div className={cl.bottomHeader}>
                    <div className={cl.bottomHeaderInner}>
                        <div>
                            <Link to='/'><LogoSVG/></Link>
                        </div>
                        <div className={cl.search}>
                            <input type="text" placeholder='Поиск'/>
                            <div className={cl.iconWrapper}>
                                <SearchSVG/>
                            </div>
                        </div>
                        <div className={cl.favorite}>
                            <FavoriteSVG/>
                            <span>Избранное</span>
                        </div>
                        <div className={cl.separator}></div>
                        <div className={cl.productCart}>
                            <ProductCartSVG/>
                            <span>Корзина</span>
                        </div>
                    </div>
                </div>
                <div className={cl.pathWrapper}>
                    <div className={cl.paths}>
                        <Link to='/'><span className={cl.path}>Главная</span></Link>
                        <span className={cl.path}>/</span>
                        <Link to='/offer'><span className={`${cl.path} ${cl.active}`}>Публичная оферта</span></Link>
                    </div>
                </div>
            </div>
            <HeaderMobile/>
        </>
    );
};

export default Header;