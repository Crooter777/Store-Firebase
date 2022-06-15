import React from 'react';
import Template from "./Template";
import cl from "../styles/Favorites.module.scss";
import CardClothes from "../components/carts/cartСlothes/CartСlothes";

const Favorites = () => {

    return (
        <Template>
            <h1 className={cl.title}>Избранное</h1>
            <div className={cl.count}>
                <h4 className={cl.title}>Товаров в избранном: </h4>
                <span>16</span>
            </div>
            <div className={cl.grid}>
            </div>
        </Template>
    );
};

export default Favorites;