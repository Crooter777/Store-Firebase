import React, {useContext, useEffect, useState} from 'react';
import Template from "./Template";
import cl from '../styles/Product.module.scss'
import SliderProducts from "../components/sliders/sliderProducts/SliderProducts";
import img4 from "../assets/img/Products/Rectangle 491-1.png";
import ProductCartSVG from "../components/SVG/ProductCartSVG";
import LoveSVG from "../components/SVG/LoveSVG";
import SliderImages from "../components/sliders/sliderImages/SliderImages";
import {useParams} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

const Product = () => {

    const {id} = useParams()

    const [isLoading, setLoading] = useState(true)

    const {ProductDetail} = useContext(Context)
    const {Bestsellers} = useContext(Context)

    useEffect(() => {
        async function load () {
            await ProductDetail.getProduct(id)
            setLoading(false)
            await Bestsellers.getProducts()
        }
        load()
    }, [])

    return (
        <Template>
            <div className={cl.wrap}>
                <div className={cl.sliderImages}>
                    {!isLoading ?
                        <SliderImages store={ProductDetail}/>
                        :
                        null
                    }
                </div>
                <div className={cl.images}>
                    {!isLoading ?
                        ProductDetail.product.product_colors.map((color) =>
                            <div key={color.id}>
                                <img src={color.image} alt=""/>
                            </div>
                        )
                        :
                        null
                    }
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
                <SliderProducts store={Bestsellers}/>
            </div>
        </Template>
    );
};

export default observer(Product)