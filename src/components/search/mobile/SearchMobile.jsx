import React, {useContext, useEffect, useState} from 'react';
import cl from './SearchMobile.module.scss'
import useSearch from "../../../hooks/useSearch";
import SearchSVG from "../../SVG/SearchSVG";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

const SearchMobile = () => {

    const {Search} = useContext(Context)

    const {States, navigate, handlePressMobile } = useSearch()

    const [height, setHeight] = useState(0)

    function resize() {
        setHeight(document.documentElement.scrollHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", resize);
        resize()
    },[])

    return (
        <div className={cl.wrap} style={{height: height - 100 + 'px'}}>
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
                        States.getProducts(e)
                    }}
                    onClick={()=>States.setModalSearch(true)}
                    onKeyPress={handlePressMobile}
                />
                <div
                    className={cl.iconWrapper}
                    onClick={() => {
                        States.setModalMobile(false)
                        States.setModalMobileBack(false)
                        Search.initSearch(States.searchValue)
                        navigate(`/search/?search=${States.searchValue}`)
                    }}
                >
                    <SearchSVG/>
                </div>
                {
                States.products.length ?
                    <div className={cl.resultsWrap}>
                        <div className={cl.results}>
                            {States.products.map((product) =>
                                <div
                                    key={product.id}
                                    onClick={() => {
                                        States.clearSearchValue()
                                        States.clearProducts()
                                        States.setModalMobileBack(false)
                                        States.setModalMobile(false)
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
                }
            </div>
        </div>
    );
};

export default observer(SearchMobile);