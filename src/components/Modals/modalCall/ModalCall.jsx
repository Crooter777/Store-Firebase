import React from 'react';
import cl from './ModalCall.module.scss'
import UserSVG from "../../SVG/UserSVG";
import CloseSVG from "../../SVG/CloseSVG";
import Phone3SVG from "../../SVG/Phone3SVG";

const ModalCall = () => {
    return (
        <div className={cl.modal}>
            <div className={cl.inner}>
                <CloseSVG className={cl.close}/>
                <h2>Если у Вас остались вопросы</h2>
                <span>Оставьте заявку и мы обязательно Вам перезвоним</span>
                <div className={cl.inputWrapper}>
                    <div><UserSVG/></div>
                    <input type="text" placeholder={"Как к вам обращаться?"}/>
                </div>
                <div className={cl.inputWrapper}>
                    <div><Phone3SVG/></div>
                    <input type="text" placeholder={"Номер телефона"}/>
                </div>
                <button className={cl.btn}>Заказать звонок</button>
            </div>
        </div>
    );
};

export default ModalCall;