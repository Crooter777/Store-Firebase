import React, {useContext, useEffect} from 'react';
import Template from "./Template";
import cl from '../styles/SearchResult.module.scss'
import CardClothes from "../components/carts/cartСlothes/CartСlothes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import SliderProducts from "../components/sliders/sliderProducts/SliderProducts";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";

const Search = () => {

    const {States} = useContext(Context)
    const {Bestsellers} = useContext(Context)

    let [searchParams] = useSearchParams();
    console.log(searchParams.get("search"))

    useEffect(() => {
        Bestsellers.getProducts()
        window.scrollTo(0, 0)
    }, [])

    return (
        <Template path={[
            {page: 'Главная', path: '/'},
            {page: 'Результаты поиска'},
        ]}>
            <h1 className={cl.title}>Результаты поиска по запросу: {States.searchValue_page}</h1>
            <div className={cl.grid}>
                {States.products_page.length !== 0 ?
                    States.products_page.map((product)=>
                        <CardClothes product={product} key={product.id}/>
                    )
                    :
                    null
                }
            </div>
            {States.products_page.length !== 0 ?
                <Pagination store={States}/>
                :
                null
            }
            {States.products_page.length === 0?
                <>
                    <div className={cl.notFound}>По вашему запросу ничего не найдено</div>
                    {/*<h1 className={cl.notFound}>Введите запрос</h1>*/}
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

export default observer(Search);