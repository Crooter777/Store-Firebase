import React, {useContext} from 'react';
import cl from './searchDesktop.module.scss'
import SearchSVG from "../../SVG/SearchSVG";
import {observer} from "mobx-react-lite";
import useSearch from "../../../hooks/search";
import {Context} from "../../../index";

const SearchDesktop = () => {

    const {States, navigate, handlePress} = useSearch()
    const {Search} = useContext(Context)

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
                        States.getProducts()
                    }}
                    onClick={()=>States.setModalSearch(true)}
                    onKeyPress={handlePress}
                />
                <div
                    className={cl.iconWrapper}
                    onClick={() => {
                        Search.initSearch(States.searchValue)
                        navigate(`/search/?search=${States.searchValue}`)
                    }}
                >
                    <SearchSVG/>
                </div>
            </div>
            {States.modalSearch ?
                States.products.length ?
                    <div className={cl.resultsWrap}>
                        <div className={cl.results}>
                            {States.products.map((product) =>
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