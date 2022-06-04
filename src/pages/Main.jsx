import React from 'react';
import Header from "../components/Headers/header/Header";
import SliderOffers from "../components/sliders/sliderOffers/SliderOffers";
import GridProducts from "../components/Grids/gridProducts/GridProducts";
import GridCollections from "../components/Grids/gridCollections/GridCollections";
import Benefits from "../components/benefits/Benefits";
import Footer from "../components/footer/footer/Footer";
import SliderProducts from "../components/sliders/sliderProducts/SliderProducts";

const Main = () => {

    return (
        <div className='pageWrapper'>
            <Header/>
            <SliderOffers/>
            <GridProducts/>
            <GridCollections/>
            <Benefits/>
            <Footer/>
        </div>
    );
};

export default Main;