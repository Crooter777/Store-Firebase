import React, {useContext, useEffect, useState} from 'react';
import Template from "./Template";
import cl from '../styles/Product.module.scss'
import SliderProducts from "../components/sliders/sliderProducts/SliderProducts";
import img4 from "../assets/img/Products/Rectangle 491-1.png";
import ProductCartSVG from "../components/SVG/ProductCartSVG";
import LoveSVG from "../components/SVG/LoveSVG";
import SliderImages from "../components/sliders/sliderImages/SliderImages";
import {useNavigate, useParams} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";
import LoveFillSVG from "../components/SVG/LoveFillSVG";

const Product = () => {

    const navigate = useNavigate()

    const {ProductDetail} = useContext(Context)
    const {Basket} = useContext(Context)
    const {Favorites} = useContext(Context)
    const {Bestsellers} = useContext(Context)

    const {id} = useParams()

    const [isLoading, setLoading] = useState(true)
    const [isColorInBasket, setColor] = useState(Basket.products.find((item)=>item.id === ProductDetail.product.id && item.product_color.id === ProductDetail.product.product_color.id))

    const [isFavorite, setFavorite] = useState(false)
    const [newPrice, setPrice] = useState(0)

    useEffect(() => {
        async function load () {
            await ProductDetail.getProduct(id)
            setPrice(ProductDetail.product.price - (ProductDetail.product.price * (ProductDetail.product.discount / 100)))
            setColor(Basket.products.find((item)=>item.id === ProductDetail.product.id && item.product_color.id === ProductDetail.product.product_color.id))
            setFavorite(Boolean(Favorites.products.find((item) => item.id === ProductDetail.product.id)))
            setLoading(false)
            await Bestsellers.getProducts()
        }
        load()
    }, [])

    return (
        <Template path={[
            {page: 'Главная', path: '/'},
            {page: 'Коллекции', path: '/collections/'},
            {page: isLoading ? null : ProductDetail.product.collection_name,
                path: `/collections/${isLoading ? null : ProductDetail.product.collection}/`},
            {page: 'Вечернее платье'},
        ]}>
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
                                {!isLoading ?
                                    ProductDetail.product.product_colors.map((color) =>
                                        ProductDetail.product.product_color.id === color.id ?
                                            <div className={`${cl.colorWrap} ${cl.active}`} key={color.id}>
                                                <div className={cl.color} style={{backgroundColor: color.rgb}}></div>
                                            </div>
                                            :
                                            <div
                                                onClick={() => {
                                                    ProductDetail.setColor(color)
                                                    setColor(Basket.products.find((item)=>item.id === ProductDetail.product.id && item.product_color.id === ProductDetail.product.product_color.id))
                                                }}
                                                className={cl.colorWrap}
                                                key={color.id}
                                            >
                                                <div className={cl.color} style={{backgroundColor: color.rgb}}></div>
                                            </div>
                                    )
                                    :
                                    null
                                }
                            </div>
                        </div>
                        <div className={cl.sumWrapper}>
                            <span className={cl.sum}>{newPrice} с </span>
                            <span className={cl.sumOld}>{ProductDetail.product.price} с</span>
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
                            {isColorInBasket
                                ?
                                <button
                                    className={cl.addCart}
                                    onClick={() => {
                                        navigate('/basket/')
                                    }}
                                >
                                    Перейти в корзину
                                </button>
                                :
                                <button
                                    className={cl.addCart}
                                    onClick={() => {
                                        Basket.add(ProductDetail.getProductForBasket())
                                        setColor(Basket.products.find((item)=>item.id === ProductDetail.product.id && item.product_color.id === ProductDetail.product.product_color.id))
                                    }}
                                >
                                    <ProductCartSVG style={{width: 20, height: 20, fill: '#fff'}}/>
                                    Добавить в корзину
                                </button>
                            }
                            <button className={cl.addFavorite}>
                                {isFavorite ?
                                    <LoveFillSVG
                                        onClick={() => {
                                            Favorites.delete(ProductDetail.product)
                                            setFavorite(false)
                                        }}
                                        style={{fill: '#fff'}}
                                    />
                                    :
                                    <LoveSVG

                                        onClick={() => {
                                            Favorites.add(ProductDetail.product)
                                            setFavorite(true)
                                        }}
                                        style={{fill: '#fff'}}
                                    />
                                }
                            </button>
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