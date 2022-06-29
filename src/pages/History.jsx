import React, {useContext} from 'react';
import cl from './styles/History.module.scss'
import Template from "./Template";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const History = () => {

    const {History} = useContext(Context)

    return (
        <Template  path={[
            {page: 'Главная', path: '/'},
            {page: 'История'},
        ]}>
            <h1 className={cl.title}>История покупок</h1>
            <div className={cl.historyWrap}>
                {History.products.map((purchase) =>
                    <div className={cl.tableWrap}>
                        <table className={cl.table}>
                            <tr>
                                <th>Артикул</th>
                                <th>Количество</th>
                                <th>Цвет</th>
                                <th>Сумма</th>
                            </tr>
                            {purchase.products.map((product) =>
                                <tr>
                                    <td>{product.article}</td>
                                    <td>{product.countForBuy * 5}</td>
                                    <td>{product.product_color.name}</td>
                                    <td>{(product.price * (product.discount / 100)) * (product.countForBuy)}</td>
                                </tr>
                            )}
                        </table>
                    </div>
                )}
            </div>
        </Template>
    );
};

export default observer(History);