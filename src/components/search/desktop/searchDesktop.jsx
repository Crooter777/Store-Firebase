import React, {useContext, useEffect, useState} from 'react';
import cl from './searchDesktop.module.scss'
import SearchSVG from "../../SVG/SearchSVG";
import {Context} from "../../../index";
import Product from "../../../pages/Product";
import Products from "../../../services/Products";
import {Link} from "react-router-dom";

const SearchDesktop = () => {

    const [isOpen, setOpen] = useState(false)
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

    return (
        <div
            className={cl.searchWrap}
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
                    onClick={()=>setOpen(true)}
                />
                <div className={cl.iconWrapper}>
                    <SearchSVG/>
                </div>
            </div>
            {isOpen ?
                products.length ?
                    <div className={cl.resultsWrap}>
                        <div className={cl.results}>
                            {products.map((product) =>
                                <Link
                                    onClick={() => setOpen(false)}
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

export default SearchDesktop;