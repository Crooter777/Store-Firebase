import React, {useContext, useEffect, useState} from 'react';
import Template from "./Template";
import cl from '../styles/Basket.module.scss'
import img from '../assets/img/Products/Rectangle 491-2.png'
import MinusSVG from "../components/SVG/MinusSVG";
import PlusSVG from "../components/SVG/PlusSVG";
import CloseSVG from "../components/SVG/CloseSVG";
import CartBusket from "../components/carts/Basket/cart/CartBusket";
import CartBasketInfo from "../components/carts/Basket/info/CartBasketInfo";
import CartBasketInfoMobile from "../components/carts/Basket/infoMobile/CartBasketInfoMobile";
import BasketModal from "../components/modals/basket/BasketModal";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ModalCallAccess from "../components/modals/modalCallAccess/ModalCallAccess";
import CardClothes from "../components/carts/cartСlothes/CartСlothes";
import SliderProducts from "../components/sliders/sliderProducts/SliderProducts";

const Basket = () => {

    const {Basket} = useContext(Context)
    const {Bestsellers} = useContext(Context)

    const [isOpen, setOpen] = useState(false)
    const [accessModal, setAccessModal] = useState(false)


    useEffect(() => {
        Bestsellers.getProducts()
    }, [])

    return (
        <Template path={[
            {page: 'Главная', path: '/'},
            {page: 'Корзина'},
        ]}>
            {Basket.products.length ?
                <div className={cl.wrap}>
                    <div className={cl.carts}>
                        {Basket.products.map((product) =>
                            <CartBusket product={product} key={product.product_color.id}/>
                        )}
                    </div>
                    <CartBasketInfo setOpen={setOpen}/>
                    <CartBasketInfoMobile setOpen={setOpen}/>
                    {isOpen ?
                        <BasketModal isOpen={isOpen} setOpen={setOpen} accessModal={setAccessModal}/>
                        :
                        null
                    }
                    {accessModal ?
                        <ModalCallAccess setModal={setAccessModal}/>
                        :
                        null
                    }
                </div>
                :
                <>
                    <h1 className={cl.title}>Корзина</h1>
                    <div className={cl.count}>
                        <h4 className={cl.title}>
                            {!Basket.products.length ?
                                <span>У Вас пока нет товаров в корзине</span>
                                :
                                null
                            }
                        </h4>
                    </div>
                    <h1 className={cl.extra}>Возможно вас заинтересует</h1>
                    {!Basket.products.length ?
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
                </>
            }
        </Template>
    );
};

export default observer(Basket);