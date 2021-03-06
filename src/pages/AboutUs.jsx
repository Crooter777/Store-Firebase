import React, {useEffect} from 'react';
import Template from "./Template";
import cl from './styles/AboutUs.module.scss'

import img from '../assets/img/AboutUs/Bgz6WeuuAgs.jpg'
import img2 from '../assets/img/AboutUs/Bgz6WeuuAgs-1.jpg'
import img3 from '../assets/img/AboutUs/Bgz6WeuuAgs-2.jpg'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Template path={[
            {page: 'Главная', path: '/'},
            {page: 'О нас'},
        ]}>
            <div className={cl.inner}>
                <div className={cl.photos}>
                    <div className={cl.rowFirst}>
                        <img src={img} alt=""/>
                        <img src={img2} alt=""/>
                    </div>
                    <div className={cl.rowSecond}>
                        <img src={img3} alt=""/>
                    </div>
                </div>
                <div className={cl.about}>
                    <div className={cl.text}>
                        <h1>О нас</h1>
                        <span>
                            У нас Вы найдёте всё, что Вам так нужно. Ассортимент магазина постоянно расширяется и дополняется в зависимости от пожеланий клиентов. Женская одежда из наших коллекций – это комфортная, стильная и качественная одежда не только на каждый день, но и для любых ситуаций по доступным ценам.Натуральные материалы, продуманные силуэты, современный дизайн и возможность легкого сочетания моделей помогут Вам всегда оставаться в центре внимания и чувствовать себя уместно в любой ситуации.Если Вы любите одеваться ярко, модно и оригинально, у нас Вы найдете все необходимое, чтобы всегда быть в центре внимания. У нас большая коллекция для любого торжества и праздника, которая сможет удовлетворить вкус самой взыскательной модницы! А для деловых ситуаций, в которых Вам непременно нужно выглядеть элегантно и стильно, мы предлагаем Вам одежду из коллекции "деловой стиль и офис". Мода постоянно диктует нам свои требования и для современной девушки, желающей идти в ногу со временем, важно иметь возможность постоянно пополнять свой гардероб стильной одеждой.
                        </span>
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default AboutUs;