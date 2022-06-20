import React, {useContext, useEffect} from 'react';
import Template from "./Template";
import cl from '../styles/Collections.module.scss'
import GridCollections from "../components/grids/gridCollections/GridCollections";
import imgC from "../assets/img/Collections/image 11(2).png";
import imgC2 from "../assets/img/Collections/image 11-1.png";
import imgC3 from "../assets/img/Collections/image 11-2.png";
import imgC4 from "../assets/img/Collections/image 11.png";
import CartCollection from "../components/carts/cartCollection/CartCollection";
import Pagination from "../components/pagination/Pagination";
import {Context} from "../index";
import {SwiperSlide} from "swiper/react";
import {observer} from "mobx-react-lite";

const Collections = () => {


    const {CollectionsPage} = useContext(Context)

    useEffect(() => {
        CollectionsPage.getProducts()
        window.scrollTo(0, 0)
    }, [])

    return (
        <Template path={[
            {page: 'Главная', path: '/'},
            {page: 'Коллекции'},
        ]}>
            <div className={cl.inner}>
                <h1>Коллекции</h1>
            </div>
            <div className={cl.grid}>
                {CollectionsPage.collections.length ?
                    CollectionsPage.collections.map((collection) =>
                        <CartCollection collection={collection} key={collection.id}/>
                    )
                    :
                    null
                }
            </div>
            {CollectionsPage.collections.length ?
                <Pagination store={CollectionsPage}/>
                :
                null
            }
        </Template>
    );
};

export default observer(Collections);