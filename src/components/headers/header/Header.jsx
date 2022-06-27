import React, {useContext, useState} from 'react';
import cl from './Header.module.scss'
import LogoSVG from "../../SVG/LogoSVG";
import SearchSVG from "../../SVG/SearchSVG";
import FavoriteSVG from "../../SVG/FavoriteSVG";
import ProductCartSVG from "../../SVG/ProductCartSVG";
import HeaderMobile from "../headerMobile/HeaderMobile";
import {Link, useNavigate} from "react-router-dom";
import SearchDesktop from "../../search/desktop/searchDesktop";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import FavoritesActiveSVG from "../../SVG/FavoritesActiveSVG";
import LoginSVG from "../../SVG/LoginSVG";
import ArrowDown from "../../SVG/ArrowDown";
import HistorySvg from "../../SVG/HistorySVG";
import LogoutSVG from "../../SVG/LogoutSVG";

const Header = () => {

    const {Auth} = useContext(Context)
    const {Favorites} = useContext(Context)
    const {Basket} = useContext(Context)

    const navigate = useNavigate()


    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className={cl.header}>
                <div className={cl.topHeader}>
                    <div className={cl.topHeaderInner}>
                        <div className={cl.pages}>
                            <span onClick={() => navigate('/about')}>О нас</span>
                            <span onClick={() => navigate('/collections')}>Коллекции</span>
                            <span onClick={() => navigate('/news')}>Новости</span>
                            {/*<Link to='/about'><span>О нас</span></Link>*/}
                            {/*<Link to='/collections'><span>Коллекции</span></Link>*/}
                            {/*<Link to='/collections/1'><span>Страница коллекции</span></Link>*/}
                            {/*<Link to='/products/5'><span>Страница продукта</span></Link>*/}
                            {/*<Link to='/news'><span>Новости</span></Link>*/}
                            {/*<Link to='/help'><span>Помощь</span></Link>*/}
                            {/*<Link to='/search'><span>Поиск</span></Link>*/}
                            {/*<Link to='/favorites'><span>Избранное</span></Link>*/}
                            {/*<Link to='/basket'><span>Корзина</span></Link>*/}

                        </div>
                        <div className={cl.rightSide}>
                            <div className={cl.contact} onClick={() => Auth.logout()}>
                                <span>Тел: </span>
                                <a href='tel:+996000000000'>+996 000 00 00 00</a>
                            </div>
                            <div className={cl.userWrap}>
                                {Auth.isAuth ?
                                    <>
                                        <div
                                            onClick={() => setOpen(bool => !bool)}
                                            className={cl.user}
                                        >
                                            {Auth.user.name} <ArrowDown/>
                                        </div>
                                            {isOpen ?
                                                <div className={cl.popup}>
                                                    <div className={cl.item}>
                                                        <HistorySvg/>
                                                        История покупок
                                                    </div>
                                                    <div className={cl.separatorItem}></div>
                                                    <div
                                                        onClick={() => {
                                                            setOpen(false)
                                                            Auth.logout()
                                                            Favorites.init(Auth.db)
                                                        }}
                                                        className={cl.item}
                                                    >
                                                        <LogoutSVG/>
                                                        Выйти
                                                    </div>
                                                </div>
                                                :
                                                null
                                            }
                                    </>
                                    :
                                    <button className={cl.auth} onClick={async () => {
                                        await Auth.login()
                                        Favorites.init(Auth.db)
                                    }}>Войти<LoginSVG/></button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.bottomHeader}>
                    <div className={cl.bottomHeaderInner}>
                        <div>
                            <Link to='/'><LogoSVG/></Link>
                        </div>
                        <SearchDesktop/>
                        <div
                            onClick={() => navigate('/favorites/')}
                            className={cl.favorite}
                        >
                            <div className={cl.icon}>
                                <FavoriteSVG/>
                                {Favorites.products.length ?
                                    <div className={cl.indicatorFavorite}></div>
                                    :
                                    null
                                }
                            </div>
                            <span>Избранное</span>
                        </div>
                        <div className={cl.separator}></div>
                        <div
                            onClick={() => navigate('/basket/')}
                            className={cl.productCart}
                        >
                            <div className={cl.icon}>
                                <ProductCartSVG style={{fill: '#515151'}}/>
                                {Basket.products.length ?
                                    <div className={cl.indicatorBasket}></div>
                                    :
                                    null
                                }
                            </div>
                            <span>Корзина</span>
                        </div>
                    </div>
                </div>
                {/*<div className={cl.pathWrapper}>*/}
                {/*    <div className={cl.paths}>*/}
                {/*        <Link to='/'><span className={cl.path}>Главная</span></Link>*/}
                {/*        <span className={cl.path}>/</span>*/}
                {/*        <Link to='/offer'><span className={`${cl.path} ${cl.active}`}>Публичная оферта</span></Link>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default observer(Header);