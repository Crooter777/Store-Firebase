import React, {useContext} from 'react';
import Template from "./Template";
import cl from "../styles/Favorites.module.scss";
import CardClothes from "../components/carts/cartСlothes/CartСlothes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Favorites = () => {

    const {Favorites} = useContext(Context)

    return (
        <Template>
            <h1 className={cl.title}>Избранное</h1>
            <div className={cl.count}>
                <h4 className={cl.title}>Товаров в избранном: </h4>
                <span>{Favorites.products.length}</span>
            </div>
            <div className={cl.grid}>
                {Favorites.products.map((product) =>
                    <CardClothes product={product} key={product.id}/>
                )}
            </div>
        </Template>
    );
};

export default observer(Favorites);