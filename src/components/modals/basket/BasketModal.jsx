import React from 'react';
import cl from './BasketModal.module.scss'
import CloseSVG from "../../SVG/CloseSVG";

const BasketModal = ({isOpen, setOpen}) => {
    return (
        <div className={cl.modal} onClick={(e) => {
            setOpen(false)
        }}>
            <div className={cl.wrap}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={cl.inner}
                >
                    <h1>Оформление заказа</h1>
                    <div className={cl.close}>
                        <CloseSVG
                            onClick={(e) => {
                                setOpen(false)
                            }}
                        />
                    </div>
                    <span className={cl.subtitle}>Ваше имя</span>
                    <input className={cl.input} type="text" placeholder="Например Азамат"/>
                    <span className={cl.subtitle}>Ваша фамилия</span>
                    <input className={cl.input} type="text" placeholder="Например Азамат уулу"/>
                    <span className={cl.subtitle}>Электронная почта</span>
                    <input className={cl.input} type="text" placeholder="example@mail.com"/>
                    <span className={cl.subtitle}>Ваш номер телефона</span>
                    <input className={cl.input} type="text" placeholder="Введите номер телефона"/>
                    <span className={cl.subtitle}>Страна</span>
                    <input className={cl.input} type="text" placeholder="Введите страну"/>
                    <span className={cl.subtitle}>Город</span>
                    <input className={cl.input} type="text" placeholder="Введите город"/>
                    <div className={cl.offerWrap}>
                        <input type="checkbox"/>
                        <span>Согласен с условиями <a href="">публичной оферты</a></span>
                    </div>
                    <button className={cl.btn}>Заказать</button>
                </div>
            </div>
        </div>
    );
};

export default BasketModal;
