import React, {useContext, useEffect, useState} from 'react';
import Template from "./Template";
import cl from '../styles/CollectionDetail.module.scss'
import SliderProducts from "../components/sliders/sliderProducts/SliderProducts";
import CardClothes from "../components/carts/cartСlothes/CartСlothes";
import img from "../assets/img/Products/Rectangle 491-2.png";
import img2 from "../assets/img/Products/Rectangle 491-11.png";
import img3 from "../assets/img/Products/Rectangle 491.png";
import img4 from "../assets/img/Products/Rectangle 491-1.png";
import img5 from "../assets/img/Products/Rectangle 491-3.png";
import img6 from "../assets/img/Products/Rectangle 491-4.png";
import img7 from "../assets/img/Products/Rectangle 491-5.png";
import img8 from "../assets/img/Products/Rectangle 491-6.png";
import Pagination from "../components/pagination/Pagination";
import {Context} from "../index";
import CartCollection from "../components/carts/cartCollection/CartCollection";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import axios from "axios";

const CollectionDetail = () => {

    const {id} = useParams()

    const {CollectionsDetail} = useContext(Context)
    const {Bestsellers} = useContext(Context)
    const {States} = useContext(Context)

    async function load() {
        let response = await axios.get(`http://localhost:8000/collections/${id}/`)
        States.collection_name = response.data
    }

    useEffect(() => {
        load()
        CollectionsDetail.getProducts()
        Bestsellers.getProducts()
        window.scrollTo(0, 0)
    }, [])

    return (
        <Template path={[
            {page: 'Главная', path: '/'},
            {page: 'Коллекции', path: '/collections/'},
            {page: 'Лето 2022'},
        ]}>
            <div className={cl.wrap}>
                {States.collection_name ?
                    <h1 className={cl.title}>{States.collection_name.title}</h1>
                    :
                    null
                }
                <div className={cl.grid}>
                    {CollectionsDetail.products.length ?
                        CollectionsDetail.products.map((product) =>
                            <CardClothes product={product} key={product.id}/>
                        )
                        :
                        null
                    }
                </div>
                <div className={cl.pagination}>
                    {CollectionsDetail.products.length ?
                        <Pagination store={CollectionsDetail}/>
                        :
                        null
                    }
                </div>
                <h1 className={cl.title}>Новинки</h1>
                <div className={cl.slider}>
                    <SliderProducts store={Bestsellers}/>
                </div>
            </div>
        </Template>
    );
};

export default observer(CollectionDetail);