import React, {useState} from 'react';
import cl from "./CartCollection.module.scss"
import ArrowSVG from "../../SVG/ArrowSVG";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import img from "../../../assets/img/Products/Rectangle 491-2.png";

const CartCollection = ({collection, ...props}) => {

    const navigate = useNavigate()

    const [images, setImages] = useState(collection.collection_images)
    const [currentImage, setCurrentImage] = useState(0)

    return (
        <div
            className={cl.cart}
            onClick={() => navigate(`/collections/${collection.id}`)}
            onMouseOut={() => setCurrentImage(0)}
        >
            <div className={cl.imagesWrap}>
                <div className={cl.images} style={{gridTemplateColumns: `repeat(${collection.collection_images.length}, 1fr)`}}>
                    {collection.collection_images.map((image, index) =>
                        <div onMouseOver={() => setCurrentImage(index)} key={image.id} className={cl.imageWrap}>
                            <div className={cl.indicator}></div>
                        </div>
                    )}
                </div>
                <img src={images[currentImage].image} className={cl.image}/>
            </div>
            <div className={cl.info}>
                <h4 className={cl.title}>Смотреть все</h4>
                <span className={cl.category}>{collection.title}</span>
                <ArrowSVG/>
            </div>
        </div>
    );
};

export default observer(CartCollection);