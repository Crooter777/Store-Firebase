import React from 'react';
import cl from './ModalCallAccess.module.scss'
import UserSVG from "../../SVG/UserSVG";
import CloseSVG from "../../SVG/CloseSVG";
import Phone3SVG from "../../SVG/Phone3SVG";
import CallAccessSVG from "../../SVG/CallAccessSVG";

const ModalCallAccess = ({setModal}) => {
    return (
        <div className={cl.modal} onClick={() => setModal(false)}>
            <div className={cl.inner}>
                <CallAccessSVG/>
                <h2>Спасибо!</h2>
                <span>Ваша заявка была принята ожидайте, скоро Вам перезвонят</span>
                <button className={cl.btn}>Продолжить покупки</button>
            </div>
        </div>
    );
};

export default ModalCallAccess;