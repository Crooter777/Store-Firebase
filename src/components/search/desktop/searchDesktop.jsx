import React from 'react';
import cl from './searchDesktop.module.scss'
import SearchSVG from "../../SVG/SearchSVG";
import {observer} from "mobx-react-lite";
import useSearch from "../../../hooks/search";

const SearchDesktop = () => {

    const {States, navigate, handlePress } = useSearch()

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