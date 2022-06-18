import React from 'react';
import cl from './SearchMobile.module.scss'
import useSearch from "../../../hooks/search";

const SearchMobile = () => {

    const {States, navigate, handlePress } = useSearch()

    return (
        <div className={cl.wrap}>

        </div>
    );
};

export default SearchMobile;