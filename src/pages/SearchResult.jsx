import React from 'react';
import Template from "./Template";
import cl from '../styles/SearchResult.module.scss'
import Pagination from "../components/pagination/Pagination";
import CardClothes from "../components/carts/cartСlothes/CartСlothes";

const SearchResult = () => {

    return (
        <Template>
            <h1 className={cl.title}>Результаты поиска по запросу: Платье</h1>
            <div className={cl.grid}>
            </div>
            {/*<Pagination/>*/}
        </Template>
    );
};

export default SearchResult;