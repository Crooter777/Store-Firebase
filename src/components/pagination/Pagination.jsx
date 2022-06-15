import React from 'react';
import cl from './Pagination.module.scss'
import LeftSVG from "../SVG/LeftSVG";
import RightSVG from "../SVG/RightSVG";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

const Pagination = ({store}) => {
    
    // console.log(toJS(store.pagesArray))
    
    return (
        <div className={cl.wrapper}>
            <div className={cl.pagination}>
                <div
                    onClick={() => store.getPrevious()}
                    className={`${cl.button} ${cl.prev}`}
                >
                    <LeftSVG/>
                </div>
                {store.pagesArray.map((page, index) =>
                    store.current_page === page ?
                        <div key={index} className={`${cl.button} ${cl.active}`}>{page}</div>
                        :
                    page === '...' ?
                        <div key={index}
                            className={cl.button}
                        >
                            {page}
                        </div>
                        :
                        <div
                            key={index}
                            className={cl.button}
                            onClick={() => store.setPage(page)}
                        >
                            {page}
                        </div>
                )}
                {/*<div className={cl.button}>...</div>*/}
                {/*<div className={cl.button}>{store.pages_quantity}</div>*/}
                <div
                    className={`${cl.button} ${cl.next}`}
                    onClick={() => store.getNext()}
                >
                    <RightSVG/>
                </div>
            </div>
        </div>
    );
};

export default observer(Pagination);