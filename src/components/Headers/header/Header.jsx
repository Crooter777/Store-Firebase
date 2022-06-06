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
                            <Link to='/about'><span>О нас</span></Link>
                            <Link to='/collections'><span>Коллекции</span></Link>
                            <Link to='/collections/1'><span>Страница коллекции</span></Link>
                            <Link to='/products/1'><span>Страница продукта</span></Link>
                            <Link to='/news'><span>Новости</span></Link>
                            <Link to='/help'><span>Помощь</span></Link>
                            <Link to='/search'><span>Поиск</span></Link>
                            <Link to='/favorites'><span>Избранное</span></Link>
                            <Link to='/basket'><span>Корзина</span></Link>
                            {/*<span>Новости</span>*/}
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
                            <ProductCartSVG style={{fill: '#515151'}}/>
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