import React from 'react';
import Template from "./Template";
import cl from '../styles/Product.module.scss'
import SliderProducts from "../components/sliders/sliderProducts/SliderProducts";
import img4 from "../assets/img/Products/Rectangle 491-1.png";
import ProductCartSVG from "../components/SVG/ProductCartSVG";
import LoveSVG from "../components/SVG/LoveSVG";
import SliderImages from "../components/sliders/sliderImages/SliderImages";

const Product = () => {

    let image = img4

    return (
        <Template>
            <div className={cl.wrap}>
                <div className={cl.sliderImages}>
                    <SliderImages/>
                </div>
                <div className={cl.images}>
                    <div className={cl.box1}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={cl.box2}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={cl.box3}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={cl.box4}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={cl.box5}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={cl.box6}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={cl.box7}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={cl.box8}>
                        <img src={image} alt=""/>
                    </div>
                </div>
                <div className={cl.info}>
                    <div className={cl.innerInfo}>
                        <h1 className={cl.productTitle}>Вечернее платье</h1>
                        <div className={cl.article}>
                            <span className={cl.subTitle}>Артикул: </span>
                            <span className={cl.text}>Платье PL984/dakota</span>
                        </div>
                        <div className={cl.colorWrapper}>
                            <span className={cl.subTitle}>Цвет: </span>
                            <div className={cl.colors}>
                                <div className={`${cl.color} ${cl.paleGreen}`}></div>
                                <div className={`${cl.color} ${cl.green}`}></div>
                                <div className={`${cl.color} ${cl.beige}`}></div>
                                <div className={`${cl.color} ${cl.brown}`}></div>
                                <div className={`${cl.color} ${cl.lilac}`}></div>
                                <div className={`${cl.color} ${cl.white}`}></div>
                                <div className={`${cl.color} ${cl.gray}`}></div>
                                <div className={`${cl.color} ${cl.red}`}></div>
                            </div>
                        </div>
                        <div className={cl.sumWrapper}>
                            <span className={cl.sum}>7229 с </span>
                            <span className={cl.sumOld}>7229 с</span>
                        </div>
                        <h3 className={cl.subTitle}>О товаре</h3>
                        <span className={cl.content}>За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.  </span>
                        <div className={cl.extra}>
                            <div>
                                <span className={cl.subTitle}>Размерный ряд: </span>
                                <span>42-50</span>
                            </div>
                            <div>
                                <span className={cl.subTitle}>Состав ткани: </span>
                                <span>Полиэстер</span>
                            </div>
                            <div>
                                <span className={cl.subTitle}>Количество в линейке: </span>
                                <span>5</span>
                            </div>
                            <div>
                                <span className={cl.subTitle}>Материал: </span>
                                <span>Полиэстер</span>
                            </div>
                        </div>
                        <div className={cl.buttons}>
                            <button className={cl.addCart}><ProductCartSVG style={{width: 20, height: 20, fill: '#fff'}}/>Добавить в корзину</button>
                            <button className={cl.addFavorite}><LoveSVG style={{fill: '#fff'}}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className={cl.title}>Похожие товары</h1>
            <div className={cl.slider}>
                <SliderProducts/>
            </div>
        </Template>
    );
};

export default Product;