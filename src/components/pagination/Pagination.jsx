import React from 'react';
import cl from './Pagination.module.scss'
import Left from "../SVG/Left";
import Right from "../SVG/Right";

const Pagination = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.pagination}>
                <div className={`${cl.button} ${cl.prev}`}>
                    <Left/>
                </div>
                <div className={`${cl.button} ${cl.active}`}>1</div>
                <div className={cl.button}>2</div>
                <div className={cl.button}>3</div>
                <div className={cl.button}>...</div>
                <div className={cl.button}>N</div>
                <div className={`${cl.button} ${cl.next}`}>
                    <Right/>
                </div>
            </div>
        </div>
    );
};

export default Pagination;