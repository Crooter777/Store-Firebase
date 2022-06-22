import React, {useContext, useEffect, useState} from 'react';
import SliderOffers from "../components/sliders/sliderOffers/SliderOffers";
import GridProducts from "../components/grids/gridProducts/GridProducts";
import GridCollections from "../components/grids/gridCollections/GridCollections";
import Benefits from "../components/benefits/Benefits";
import ModalCall from "../components/modals/modalCall/ModalCall";
import ModalCallAccess from "../components/modals/modalCallAccess/ModalCallAccess";
import Template from "./Template";
import {Context} from "../index";
import cl from '../styles/Main.module.scss'
import VectorChat from "../components/SVG/VectorChat";
import Chat from "../components/SVG/Chat";
import ChatCloseVector from "../components/SVG/ChatCloseVector";
import InstagramSVG from "../components/SVG/InstagramSVG";
import TelegramSVG from "../components/SVG/TelegramSVG";
import Telegram2SVG from "../components/SVG/Telegram2SVG";
import Whatsapp2SVG from "../components/SVG/Whatsapp2SVG";
import Phone2SVG from "../components/SVG/Phone2SVG";

const Main = () => {

    const {Bestsellers} = useContext(Context)
    const {Novelties} = useContext(Context)
    const {CollectionsMain} = useContext(Context)

    const [isActive, setActive] = useState(false)

    return (
        <Template>
            <div className={cl.contactsWrap}>
                <div className={cl.contact}>
                    <VectorChat onClick={() => window.scrollTo(0, 0)}/>
                    {isActive ?
                        <>
                        <ChatCloseVector onClick={() => setActive(false)}/>
                        <div className={cl.socialWrap}>
                            <div className={cl.socials}>
                                <Telegram2SVG/>
                                <Whatsapp2SVG/>
                                <Phone2SVG/>
                            </div>
                        </div>
                        </>
                        :
                        <Chat onClick={() => setActive(true)}/>
                    }

                </div>
            </div>
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