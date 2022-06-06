import React from 'react';
import cl from './Benefits.module.scss'
import Money from "../SVG/Money";
import Truck from "../SVG/Truck";
import Callback from "../SVG/Callback";
import Shop from "../SVG/Shop";

const Benefits = () => {
    return (
        <div className='container'>
            <div className={cl.inner}>
                <h3 className={cl.title}>Наши преимущества</h3>
                <div className={cl.benefits}>
                    <div className={cl.benefit}>
                        <Money/>
                        <h4>Удобные способы оплаты</h4>
                        <p>Мы предлагаем возможность безналичной оплаты</p>
                    </div>
                    <div className={cl.benefit}>
                        <Truck/>
                        <h4>Своевременная доставка</h4>
                        <p>100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.</p>
                    </div>
                    <div className={cl.benefit}>
                        <Callback/>
                        <h4>Профессиональная консультация</h4>
                        <p>Мы проконсультируем
                            и индивидуально подойдем
                            к Вашему заказу </p>
                    </div>
                    <div className={cl.benefit}>
                        <Shop/>
                        <h4>Акции и бонусы для покупателей</h4>
                        <p>Промокоды со скидками для постоянных клиентов, акции
                            на новые позиции</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;