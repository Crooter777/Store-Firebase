import React, {useEffect} from 'react';
import cl from './GridProducts.module.scss'
import CardClothes from "../../carts/cartСlothes/CartСlothes";
import SliderProducts from "../../sliders/sliderProducts/SliderProducts";
import {observer} from "mobx-react-lite";

const GridProducts = ({title, store, ...props}) => {

    useEffect(() => {
        store.getProducts()
    }, [])

    return (
        <div className={cl.inner}>
            <h1 className={cl.h1}>{title}</h1>
            <div className={cl.collection}>
                {store.products.length ?
                    store.products.map((product) =>
                        <CardClothes product={product} key={product.id}/>
                    )
                :
                    null
                }
            </div>
            <div className={cl.slider}>
                <SliderProducts store={store}/>
            </div>
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

export default observer(GridProducts);