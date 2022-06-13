import React, {useEffect} from 'react';
import cl from './GridCollections.module.scss'
import ArrowSVG from "../../SVG/ArrowSVG";
import CardClothes from "../../carts/cartСlothes/CartСlothes";
import SliderProducts from "../../sliders/sliderProducts/SliderProducts";
import CartCollection from "../../carts/cartCollection/CartCollection";
import SliderCollections from "../../sliders/sliderCollections/SliderCollections";
import img from "../../../assets/img/Collections/image 11(2).png";
import img2 from "../../../assets/img/Collections/image 11-1.png";
import img3 from "../../../assets/img/Collections/image 11-2.png";
import img4 from "../../../assets/img/Collections/image 11.png";
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
                <button
                    className={cl.button}
                    onClick={() => store.getNext()}
                >
                    Еще
                </button>
            </div>
        </div>
    );
};

export default observer(GridCollections);