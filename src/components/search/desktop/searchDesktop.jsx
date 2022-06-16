import React, {useContext, useEffect, useState} from 'react';
import cl from './searchDesktop.module.scss'
import SearchSVG from "../../SVG/SearchSVG";
import {Context} from "../../../index";
import Products from "../../../services/Products";
import {observer} from "mobx-react-lite";
import {useLocation, useNavigate} from "react-router-dom";

const SearchDesktop = () => {

    const {States} = useContext(Context)

    const location = useLocation()
    console.log(location)

    if (location.pathname === '/search/') {
        States.isSearchPage = true
    }

    const navigate = useNavigate()

    function handlePress(e) {
        if(e.key === 'Enter') {
            States.setModalSearch(false)
            navigate(`/search/?search=${ e.target.value}`)
        }
    }

    useEffect(() => {
        if (location.pathname !== '/search/') {
            States.isSearchPage = false
        }
    }, [location])

    return (
        <div
            className={cl.searchWrap}
            onClick={(e) => e.stopPropagation()}
        >
            <div
                tabIndex={0}
                className={cl.search}
            >
                <input
                    type="text"
                    placeholder='Поиск'
                    value={States.searchValue}
                    onChange={(e) => {
                        States.setSearchValue(e)
                        States.searchProducts(e)
                    }}
                    onClick={()=>States.setModalSearch(true)}
                    onKeyPress={handlePress}
                />
                <div
                    className={cl.iconWrapper}
                    onClick={() => {
                        navigate(`/search/?search=${States.searchValue}`)
                    }}
                >
                    <SearchSVG/>
                </div>
            </div>
            {States.modalSearch ?
                States.searchedProducts.length ?
                    <div className={cl.resultsWrap}>
                        <div className={cl.results}>
                            {States.searchedProducts.map((product) =>
                                <div
                                    key={product.id}
                                    onClick={() => {
                                        States.clearSearchValue()
                                        States.clearProducts()
                                        States.setModalSearch(false)
                                        navigate(`/products/${product.id}`)
                                    }}
                                    className={cl.result}
                                >
                                    <h4>{product.name}</h4>
                                </div>
                            )}
                        </div>
                    </div>
                    :
                    null
                :
                null
            }
        </div>
    );
};

export default observer(SearchDesktop);