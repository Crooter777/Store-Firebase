import React, {useContext, useEffect, useState} from 'react';
import cl from './searchDesktop.module.scss'
import SearchSVG from "../../SVG/SearchSVG";
import {Context} from "../../../index";
import Product from "../../../pages/Product";
import Products from "../../../services/Products";
import {Link, useSearchParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const SearchDesktop = () => {

    const {States} = useContext(Context)

    const [setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    const [value, setValue] = useState('')
    const [products, setProducts] = useState([])

    async function search(e) {
        const value = e.target.value
        setValue(value)
        if (value !== '') {
            const result = await Products.search(value)
            setProducts(result.data)
        } else {
            setProducts([])
        }
    }

    function handlePress(e) {
        if(e.key === 'Enter') {
            navigate(`/?search=${ e.target.value}`)
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
                    value={value}
                    onChange={search}
                    onClick={()=>States.setModalSearch(true)}
                    onKeyPress={handlePress}
                />
                <div
                    className={cl.iconWrapper}
                    onClick={() => {
                        navigate(`/?search=${value}`)
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
                                <Link
                                    onClick={() => {
                                        setValue('')
                                        States.setModalSearch(false)
                                    }}
                                    to={`/products/${product.id}`}
                                >
                                    <div
                                        className={cl.result}
                                    >
                                        <h4>{product.name}</h4>
                                    </div>
                                </Link>
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