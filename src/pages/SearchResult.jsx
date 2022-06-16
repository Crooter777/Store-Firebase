import React, {useContext, useEffect} from 'react';
import Template from "./Template";
import cl from '../styles/SearchResult.module.scss'
import CardClothes from "../components/carts/cartСlothes/CartСlothes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import SliderProducts from "../components/sliders/sliderProducts/SliderProducts";
import {useLocation} from 'react-router-dom'

const SearchResult = () => {

    const {States} = useContext(Context)
    const {Bestsellers} = useContext(Context)


    useEffect(() => {
        Bestsellers.getProducts()
    }, [])


    return (
        <Template>
            <h1 className={cl.title}>Результаты поиска по запросу: {States.searchValue}</h1>
            <div className={cl.grid}>
                {States.searchedProducts.length !== 0 ?
                    States.searchedProducts.map((product)=>
                        <CardClothes product={product} key={product.id}/>
                    )
                    :
                    null
                }
            </div>
            {States.searchedProducts.length === 0?
                <>
                {States.searchValue.length !== 0 ?
                    <div className={cl.notFound}>По вашему запросу ничего не найдено</div>
                    :
                    <h1 className={cl.notFound}>Введите запрос</h1>
                }
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