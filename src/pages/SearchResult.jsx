import React, {useContext, useEffect, useState} from 'react';
import Template from "./Template";
import cl from '../styles/SearchResult.module.scss'
import Pagination from "../components/pagination/Pagination";
import CardClothes from "../components/carts/cartСlothes/CartСlothes";
import {useSearchParams} from "react-router-dom";
import Products from "../services/Products";
import {logDOM} from "@testing-library/react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import SliderProducts from "../components/sliders/sliderProducts/SliderProducts";

const SearchResult = () => {

    const {States} = useContext(Context)
    const {Bestsellers} = useContext(Context)

    const [products, setProducts] = useState([])
    const [isEmpty, setEmpty] = useState(false)

    async function search() {
        if (States.searchValue === '') {
            setEmpty(true)
            setProducts([])
            return
        }
        const result = await Products.search(States.searchValue)
        await setProducts(result.data)
        if (result.data.length !== 0) {
            setEmpty(false)
        } else {
            setEmpty(true)
        }
    }

    useEffect(() => {
        search()
    }, [States.searchValue])

    useEffect(() => {
        Bestsellers.getProducts()
    }, [])


    return (
        <Template>
            <h1 className={cl.title}>Результаты поиска по запросу: {States.searchValue}</h1>
            <div className={cl.grid}>
                {!isEmpty ?
                    products.map((product)=>
                        <CardClothes product={product} key={product.id}/>
                    )
                    :
                    null
                }
            </div>
            {isEmpty ?
                <>
                    <div className={cl.notFound}>По вашему запросу ничего не найдено</div>
                    <h1 className={cl.extra}>Возможно вас заинтересует</h1>
                    <div className={cl.slider}>
                        {Bestsellers.products.length ?
                            <SliderProducts store={Bestsellers}/>
                            :
                            null
                        }
                    </div>
                </>
                :
                null
            }
            {/*<Pagination/>*/}
        </Template>
    );
};

export default observer(SearchResult);