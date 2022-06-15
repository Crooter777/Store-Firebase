import React, {useState} from 'react';
import cl from './CartBasketInfoMobile.module.scss'

const CartBasketInfoMobile = ({setOpen}) => {

    const [isActive, setActive] = useState()

    return (
        <div className={cl.wrap}>
            {isActive ?
                <div className={cl.detail}>
                    <h4>Сумма заказа</h4>
                    <div className={cl.row}>
                    <span className={cl.subtitle}>
                        Общее количество:
                    </span>
                        <span className={cl.value}>
                        7 линеек (35шт.)
                    </span>
                    </div>
                    <div className={cl.row}>
                    <span className={cl.subtitle}>
                        Стоимость:
                    </span>
                        <span className={cl.value}>
                        13 595 сом
                    </span>
                    </div>
                    <div className={cl.row}>
                    <span className={cl.subtitle}>
                        Скидка:
                    </span>
                        <span className={cl.value}>
                        1 270 сом
                    </span>
                    </div>
                </div>
                :
                null
            }
            <div className={cl.sumWrap}>
                <span className={cl.sumTitle}>Итого к оплате:</span>
                <span className={cl.sum}>1235 сом</span>
            </div>
            <button
                className={cl.btnInfo}
                onClick={() => setActive(bool => !bool)}
            >
                {isActive ? 'Скрыть' : 'Информация о заказе'}
            </button>
            <button
                className={cl.btn}
                onClick={() => setOpen(true)}
            >Оформить заказ</button>
        </div>
    );
};

export default CartBasketInfoMobile;