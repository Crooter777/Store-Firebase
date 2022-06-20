import React from 'react';
import cl from "./CartCollection.module.scss"
import ArrowSVG from "../../SVG/ArrowSVG";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const CartCollection = ({collection, ...props}) => {

    const navigate = useNavigate()

    return (
        <div
            className={cl.cart}
            onClick={() => navigate(`/collections/${collection.id}`)}
        >
            <img src={collection.collection_images[0].image} alt=""/>
            <div className={cl.info}>
                <h4 className={cl.title}>Смотреть все</h4>
                <span className={cl.category}>{collection.title}</span>
                <ArrowSVG/>
            </div>
        </div>
    );
};

export default observer(CartCollection);