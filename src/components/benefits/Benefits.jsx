import React from 'react';
import cl from './Benefits.module.scss'
import MoneySVG from "../SVG/MoneySVG";
import TruckSVG from "../SVG/TruckSVG";
import CallbackSVG from "../SVG/CallbackSVG";
import ShopSVG from "../SVG/ShopSVG";

const Benefits = () => {
    return (
        <div className={cl.inner}>
            <h3 className={cl.title}>Наши преимущества</h3>
            <div className={cl.benefits}>
                <div className={cl.benefit}>
                    <MoneySVG/>
                    <h4>Удобные способы оплаты</h4>
                    <p>Мы предлагаем возможность безналичной оплаты</p>
                </div>
                <div className={cl.benefit}>
                    <TruckSVG/>
                    <h4>Своевременная доставка</h4>
                    <p>100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.</p>
                </div>
                <div className={cl.benefit}>
                    <CallbackSVG/>
                    <h4>Профессиональная консультация</h4>
                    <p>Мы проконсультируем
                        и индивидуально подойдем
                        к Вашему заказу </p>
                </div>
                <div className={cl.benefit}>
                    <ShopSVG/>
                    <h4>Акции и бонусы для покупателей</h4>
                    <p>Промокоды со скидками для постоянных клиентов, акции
                        на новые позиции</p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;