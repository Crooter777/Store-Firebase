import React from 'react';
import cl from './GridCollections.module.scss'
import img from '../../../assets/img/Zeon Store/image 11.png'
import img2 from '../../../assets/img/Zeon Store/image 11-1.png'
import img3 from '../../../assets/img/Zeon Store/image 11-2.png'
import img4 from '../../../assets/img/Zeon Store/image 11-3.png'
import ArrowSVG from "../../SVG/ArrowSVG";

const GridCollections = () => {
    return (
        <div className={cl.wrapper}>
            <h1 className={cl.h1}>Коллекция</h1>
            <div className={cl.collection}>
                <div className={cl.cart}>
                    <img src={img} alt=""/>
                    <div className={cl.info}>
                        <span className={cl.category}>Повседневная одежда</span>
                        <h4 className={cl.title}>Смотреть все</h4>
                        <ArrowSVG/>
                    </div>
                </div>
                <div className={cl.cart}>
                    <img src={img2} alt=""/>
                    <div className={cl.info}>
                        <span className={cl.category}>Повседневная одежда</span>
                        <h4 className={cl.title}>Смотреть все</h4>
                        <ArrowSVG/>
                    </div>
                </div>
                <div className={cl.cart}>
                    <img src={img3} alt=""/>
                    <div className={cl.info}>
                        <span className={cl.category}>Повседневная одежда</span>
                        <h4 className={cl.title}>Смотреть все</h4>
                        <ArrowSVG/>
                    </div>
                </div>
                <div className={cl.cart}>
                    <img src={img4} alt=""/>
                    <div className={cl.info}>
                        <span className={cl.category}>Повседневная одежда</span>
                        <h4 className={cl.title}>Смотреть все</h4>
                        <ArrowSVG/>
                    </div>
                </div>
            </div>
            <button className={cl.button}>Еще</button>
        </div>
    );
};

export default GridCollections;