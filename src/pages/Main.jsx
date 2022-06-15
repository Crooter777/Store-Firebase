import React, {useContext, useEffect, useState} from 'react';
import SliderOffers from "../components/sliders/sliderOffers/SliderOffers";
import GridProducts from "../components/grids/gridProducts/GridProducts";
import GridCollections from "../components/grids/gridCollections/GridCollections";
import Benefits from "../components/benefits/Benefits";
import ModalCall from "../components/modals/modalCall/ModalCall";
import ModalCallAccess from "../components/modals/modalCallAccess/ModalCallAccess";
import Template from "./Template";
import {Context} from "../index";

const Main = () => {



    const {Bestsellers} = useContext(Context)
    const {Novelties} = useContext(Context)
    const {CollectionsMain} = useContext(Context)

    return (
        <Template>
            <SliderOffers/>
            <GridProducts
                store={Bestsellers}
                title={'Хит продаж'}
            />
            <GridProducts
                store={Novelties}
                title={'Новинки'}
            />
            <GridCollections
                store={CollectionsMain}
                title={'Коллекции'}
            />
            <Benefits/>
            {/*<ModalCall/>*/}
            {/*<ModalCallAccess/>*/}
        </Template>
    );
};

export default Main;