import React, {useEffect} from 'react';
import cl from './GridCollections.module.scss'
import CartCollection from "../../carts/cartCollection/CartCollection";
import SliderCollections from "../../sliders/sliderCollections/SliderCollections";
import {observer} from "mobx-react-lite";

const GridCollections = ({title, store, ...props}) => {

    useEffect(() => {
       store.getProducts()
    }, [])

    return (
        <div className={cl.inner}>
            {title ? <h1 className={cl.h1}>{title}</h1> : null}
            <div className={cl.collection}>
                {store.collections.length ?
                    store.collections.map((collection) =>
                        <CartCollection collection={collection} key={collection.id}/>
                    )
                    :
                    null
                }
            </div>
            <SliderCollections store={store}/>
            <div className='center'>
                {!store.isLast ?
                    <button
                        className={cl.button}
                        onClick={() => store.getNext()}
                    >
                        Еще
                    </button>
                    :
                    null
                }
            </div>
        </div>
    );
};

export default observer(GridCollections);