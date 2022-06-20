import React, {useContext, useState} from 'react';
import cl from "./CartСlothes.module.scss";
import img from "../../../assets/img/Products/Rectangle 491-2.png";
import LoveSVG from "../../SVG/LoveSVG";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";
import {Context} from "../../../index";
import LoveFillSVG from "../../SVG/LoveFillSVG";
import {useNavigate} from "react-router-dom";

const CardClothes = ({product, ...props}) => {

    const {Favorites} = useContext(Context)

    const initValue = Boolean(Favorites.products.find((item) => item.id === product.id))

    const [isFavorite, setFavorite] = useState(initValue)

    const navigate = useNavigate()

    return (
        <div
            className={cl.cart}
            onClick={() => navigate(`/products/${product.id}`)}
        >
            <img src={product.product_colors[0].image} alt=""/>
            <div className={cl.triangle}></div>
            <span className={cl.sale}>{product.discount}%</span>
            {isFavorite ?
                <div
                    onClick={(e) => {
                        e.stopPropagation()
                        Favorites.delete(product)
                        setFavorite(false)
                    }}
                    className={cl.icon}
                >
                    <LoveFillSVG/>
                </div>
                :
                <div
                    onClick={(e) => {
                        e.stopPropagation()
                        Favorites.add(product)
                        setFavorite(true)
                    }}
                    className={cl.icon}
                >
                    <LoveSVG
                        className={cl.love}
                    />
                </div>
            }
            <div className={cl.info}>
                <h4 className={cl.title}>{product.name}</h4>
                <span className={cl.sum}>{product.price} сом</span>
                <div className={cl.sizes}>
                    <span className={cl.size}>Размер:</span>
                    <span className={cl.sizeNumber}>{product.size}</span>
                </div>
                <div className={cl.colors}>
                    {product.product_colors.map((color) =>
                        <div className={cl.color} key={color.id} style={{backgroundColor: color.rgb}}></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardClothes;