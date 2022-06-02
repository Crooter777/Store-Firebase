import React from 'react';
import Header from "../components/Headers/header/Header";
import SliderD from "../components/sliders/sliderDesctop/SliderD";
import MainCollection from "../components/Collections/mainCollection/mainCollection";
import MainCollectionV2 from "../components/Collections/mainCollectionV2/mainCollectionV2";
import Benefits from "../components/benefits/Benefits";
import Footer from "../components/footer/Footer";

const Main = () => {
    return (
        <div className='pageWrapper'>
            <Header/>
            <SliderD/>
            <MainCollection/>
            <MainCollectionV2/>
            <Benefits/>
            <Footer/>
        </div>
    );
};

export default Main;