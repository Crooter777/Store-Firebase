import React from 'react';
import Template from "./Template";
import cl from '../styles/Basket.module.scss'
import img from '../assets/img/Products/Rectangle 491-2.png'

const Basket = () => {
    return (
        <Template>
            <div className={cl.wrap}>
                <div className={cl.carts}>
                    <div className={cl.cart}>
                        <img src={img} alt=""/>
                        <div className={cl.details}>
                            <h4>Вечернее платье</h4>
                            <div className={cl.size}>
                                <span>Размер: </span>
                                <span>42-50</span>
                            </div>
                            <div className={cl.colorWrapper}>
                                <span>Цвет:</span>
                                <div className={cl.color}>
                                    <div className={cl.colorInner}></div>
                                </div>
                            </div>
                            <div className={cl.price}>
                                <span className={cl.newPrice}>1 365р</span>
                                <span className={cl.oldPrice}>1 765р</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.info}>
                    <h4 className={cl.title}>Сумма заказа</h4>
                    <div className={cl.infoRow}>
                        <span className={cl.subtitle}>Количество линеек:</span>
                        <span className={cl.count}>7 шт</span>
                    </div>
                    <div className={cl.infoRow}>
                        <span className={cl.subtitle}>Количество товаров:</span>
                        <span className={cl.count}>35 шт</span>
                    </div>
                    <div className={cl.infoRow}>
                        <span className={cl.subtitle}>Стоимость:</span>
                        <span className={cl.count}>13 595 рублей</span>
                    </div>
                    <div className={cl.infoRow}>
                        <span className={cl.subtitle}>Скидка:</span>
                        <span className={cl.count}>1 270 рублей</span>
                    </div>
                    <div className={cl.separator}></div>
                    <div className={cl.infoRow}>
                        <span className={cl.subtitle}>Итого к оплате:</span>
                        <span className={cl.count}>12 325 рублей</span>
                    </div>
                    <button className={cl.btn}>Оформить заказ</button>
                </div>
            </div>
        </Template>
    );
};

export default Basket;