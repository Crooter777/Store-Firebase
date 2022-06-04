import React from 'react';
import cl from './mainCollection.module.scss'
import img5 from '../../../assets/img/Zeon Store/Rectangle 491-3.png'
import LoveSVG from "../../SVG/LoveSVG";
import LoveFillSVG from "../../SVG/LoveFillSVG";
import CardClothes from "../../cards/CardСlothes/CardСlothes";


const MainCollection = () => {
    return (
        <div className={cl.wrapper}>
            <h1 className={cl.h1}>Хит продаж</h1>
            <div className={cl.collection}>
                <CardClothes url={img5}/>
            </div>
            <button className={cl.button}>Еще</button>
        </div>
    );
};

export default MainCollection;