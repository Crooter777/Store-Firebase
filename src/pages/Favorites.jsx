import React from 'react';
import Template from "./Template";
import cl from "../styles/Favorites.module.scss";
import CardClothes from "../components/carts/cartСlothes/CartСlothes";
import Pagination from "../components/pagination/Pagination";
import img from "../assets/img/Products/Rectangle 491-2.png";
import img2 from "../assets/img/Products/Rectangle 491-11.png";
import img3 from "../assets/img/Products/Rectangle 491.png";
import img4 from "../assets/img/Products/Rectangle 491-1.png";
import img5 from "../assets/img/Products/Rectangle 491-3.png";
import img6 from "../assets/img/Products/Rectangle 491-4.png";
import img7 from "../assets/img/Products/Rectangle 491-5.png";
import img8 from "../assets/img/Products/Rectangle 491-6.png";

const Favorites = () => {

    let images = [img, img2, img3, img4, img5, img6, img7, img8]

    return (
        <Template>
            <h1 className={cl.title}>Избранное</h1>
            <div className={cl.count}>
                <h4 className={cl.title}>Товаров в избранном: </h4>
                <span>16</span>
            </div>
            <div className={cl.grid}>
                {images.map((image) =>
                    <CardClothes url={image}/>
                )}
            </div>
        </Template>
    );
};

export default Favorites;