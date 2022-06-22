import React, {useContext, useEffect} from 'react';
import Template from "./Template";
import cl from "../styles/Favorites.module.scss";
import CardClothes from "../components/carts/cartСlothes/CartСlothes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import SliderProducts from "../components/sliders/sliderProducts/SliderProducts";

const Favorites = () => {

    const {Favorites} = useContext(Context)
    const {Bestsellers} = useContext(Context)

    useEffect(() => {
        Bestsellers.getProducts()
    }, [])


    return (
        <Template path={[
            {page: 'Главная', path: '/'},
            {page: 'Избранное'},
        ]}>
            <h1 className={cl.title}>Избранное</h1>
            <div className={cl.count}>
                <h4 className={cl.title}>
                    {!Favorites.products.length ?
                        null
                        :
                        'У Вас пока нет избранных товаров'
                    }
                </h4>
                <span>
                    {Favorites.products.length ?
                        Favorites.products.length
                        :
                        null
                    }
                </span>
            </div>У Вас пока нет избранных товаров
            <div className={cl.grid}>
                {Favorites.products.map((product) =>
                    <CardClothes product={product} key={product.id}/>
                )}
            </div>
            <h1 className={cl.extra}>Возможно вас заинтересует</h1>
            {!Favorites.products.length ?
                <div className={cl.slider}>
                    {Bestsellers.products.length ?
                        <SliderProducts store={Bestsellers}/>
                        :
                        null
                    }
                </div>
                :
                null
            }

        </Template>
    );
};

export default observer(Favorites);