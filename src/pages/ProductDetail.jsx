import React, {useCallback, useContext, useEffect, useState} from 'react';
import Template from "./Template";
import cl from './styles/Product.module.scss'
import ProductCartSVG from "../components/SVG/ProductCartSVG";
import LoveSVG from "../components/SVG/LoveSVG";
import SliderImages from "../components/sliders/sliderImages/SliderImages";
import {useNavigate, useParams} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import LoveFillSVG from "../components/SVG/LoveFillSVG";
import * as PropTypes from "prop-types";
import ImageViewer from "react-simple-image-viewer";
import SliderMaybe from "../components/sliders/sliderMaybe/SliderMaybe";

ImageViewer.propTypes = {
    closeOnClickOutside: PropTypes.bool,
    onClose: PropTypes.func,
    src: PropTypes.any,
    disableScroll: PropTypes.bool,
    backgroundStyle: PropTypes.shape({backgroundColor: PropTypes.string}),
    currentIndex: PropTypes.number
};
const ProductDetail = () => {

    const navigate = useNavigate()

    const {ProductDetail} = useContext(Context)
    const {Basket} = useContext(Context)
    const {Favorites} = useContext(Context)
    const {Bestsellers} = useContext(Context)
    const {Auth} = useContext(Context)

    const {id} = useParams()

    const [isLoading, setLoading] = useState(true)
    const [isColorInBasket, setColor] = useState(Basket.products.find((item)=>item.id === ProductDetail.product.id && item.product_color.id === ProductDetail.product.product_color.id))

    const [isFavorite, setFavorite] = useState(false)
    const [newPrice, setPrice] = useState(0)

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const [images, setImages] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        async function load () {
            await ProductDetail.getProduct(id)
            setPrice(ProductDetail.product.price - (ProductDetail.product.price * (ProductDetail.product.discount / 100)))
            setColor(Basket.products.find((item)=>item.id === ProductDetail.product.id && item.product_color.id === ProductDetail.product.product_color.id))
            setFavorite(Boolean(Favorites.products.find((item) => item.id === ProductDetail.product.id)))
            setLoading(false)
            for (let color of ProductDetail.product.product_colors) {
                setImages(images => [...images, color.image])
            }
            await Bestsellers.getProducts()
        }
        load()
    }, [])

    useEffect(() => {
        setColor(Basket.products.find((item)=>item.id === ProductDetail.product.id && item.product_color.id === ProductDetail.product.product_color.id))
    }, [Basket.products])

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
                        ProductDetail.product.product_colors.map((color, index) =>
                            <div key={color.id} style={{cursor: 'pointer'}}>
                                <img onClick={() => openImageViewer(index)} src={color.image} alt=""/>
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
                                <span className={cl.subTitle2}>Размерный ряд: </span>
                                <span>42-50</span>
                            </div>
                            <div>
                                <span className={cl.subTitle2}>Состав ткани: </span>
                                <span>Полиэстер</span>
                            </div>
                            <div>
                                <span className={cl.subTitle2}>Количество в линейке: </span>
                                <span>5</span>
                            </div>
                            <div>
                                <span className={cl.subTitle2}>Материал: </span>
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
                                    onClick={async () => {
                                        if (Auth.isAuth) {
                                            await Basket.add(Auth.db, ProductDetail.getProductForBasket(), Auth.user.uid)
                                            setColor(Basket.products.find((item)=>item.id === ProductDetail.product.id && item.product_color.id === ProductDetail.product.product_color.id))
                                        } else {
                                            Auth.login()
                                        }
                                    }}
                                >
                                    <ProductCartSVG style={{width: 20, height: 20, fill: '#fff'}}/>
                                    Добавить в корзину
                                </button>
                            }
                            <button className={cl.addFavorite}>
                                {isFavorite ?
                                    <div className={cl.iconWrap} onClick={() => {
                                        Favorites.delete(Auth.db, ProductDetail.product)
                                        setFavorite(false)
                                    }}>
                                        <LoveFillSVG
                                            style={{fill: '#fff'}}
                                        />
                                    </div>
                                    :
                                    <div className={cl.iconWrap}
                                         onClick={() => {
                                             if (Auth.isAuth) {
                                                 Favorites.add(Auth.db, ProductDetail.product, Auth.user.uid)
                                                 setFavorite(true)
                                             } else {
                                                 Auth.login()
                                             }
                                         }}>
                                        <LoveSVG
                                            style={{fill: '#fff'}}
                                        />
                                    </div>

                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className={cl.title}>Похожие товары</h1>
            <div className={cl.slider}>
                <SliderMaybe store={Bestsellers}/>
            </div>
            {isViewerOpen && (
                <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                />
            )}
        </Template>
    );
};

export default observer(ProductDetail)