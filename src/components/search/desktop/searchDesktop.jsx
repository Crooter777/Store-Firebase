import React, {useContext, useEffect, useState} from 'react';
import cl from './searchDesktop.module.scss'
import SearchSVG from "../../SVG/SearchSVG";
import {Context} from "../../../index";
import Products from "../../../services/Products";
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const SearchDesktop = () => {

    const {States} = useContext(Context)

    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    async function search(e) {
        const value = e.target.value
        States.setSearchValue(value)
        if (value !== '') {
            const result = await Products.search(value)
            setProducts(result.data)
        } else {
            setProducts([])
        }
    }

    function handlePress(e) {
        if(e.key === 'Enter') {
            navigate(`/search/?search=${ e.target.value}`)
        }
    }

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
                    onChange={search}
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
                products.length ?
                    <div className={cl.resultsWrap}>
                        <div className={cl.results}>
                            {products.map((product) =>
                                <div
                                    key={product.id}
                                    onClick={() => {
                                        States.setSearchValue('')
                                        setProducts([])
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