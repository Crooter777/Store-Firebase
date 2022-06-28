import React, {useContext, useEffect, useState} from 'react';
import SliderOffers from "../components/sliders/sliderOffers/SliderOffers";
import GridProducts from "../components/grids/gridProducts/GridProducts";
import GridCollections from "../components/grids/gridCollections/GridCollections";
import Benefits from "../components/benefits/Benefits";
import ModalCall from "../components/modals/modalCall/ModalCall";
import ModalCallAccess from "../components/modals/modalCallAccess/ModalCallAccess";
import Template from "./Template";
import {Context} from "../index";
import cl from './styles/Main.module.scss'
import VectorChatSVG from "../components/SVG/VectorChatSVG";
import ChatSVG from "../components/SVG/ChatSVG";
import ChatCloseVectorSVG from "../components/SVG/ChatCloseVectorSVG";
import Telegram2SVG from "../components/SVG/Telegram2SVG";
import Whatsapp2SVG from "../components/SVG/Whatsapp2SVG";
import Phone2SVG from "../components/SVG/Phone2SVG";
import axios from "axios";
import {useLocation} from "react-router-dom";

const Main = () => {

    const {Bestsellers} = useContext(Context)
    const {Novelties} = useContext(Context)
    const {CollectionsMain} = useContext(Context)

    const [isActive, setActive] = useState(false)
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(true)
    const [modal, setModal] = useState(false)
    const [access, setAccess] = useState(false)

    const [isMain, setMain] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            setMain(true)
        } else {
            setMain(false)
        }
    }, [location])

    async function load() {
        window.scrollTo(0, 0)
        const response = await axios.get('http://localhost:8000/contacts/')
        setData(response.data[0])
        setLoading(false)
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <Template>
            <SliderOffers/>
            <div className={cl.contactsWrap}>
                <div className={cl.contact}>
                    <a href="#header"><VectorChatSVG/></a>
                    {isActive ?
                        <>
                        <ChatCloseVectorSVG onClick={() => setActive(false)}/>
                        <div className={cl.socialWrap}>
                            <div className={cl.socials}>
                                {!isLoading ?
                                    <>
                                        <a href={data.telegram} target="_blank"><Telegram2SVG/></a>
                                        <a href={data.whatsapp} target="_blank"><Whatsapp2SVG/></a>
                                        <Phone2SVG onClick={() => {
                                            setModal(true)
                                            setActive(false)
                                        }}/>
                                    </>
                                    :
                                    null
                                }

                            </div>
                        </div>
                        </>
                        :
                        <ChatSVG onClick={() => setActive(true)}/>
                    }
                </div>
            </div>
            {/*<SliderOffers/>*/}
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
            {modal ?
                <ModalCall isActive={modal} setActive={setModal} setAccess={setAccess}/>
                :
                null
            }
            {access ?
                <ModalCallAccess setModal={setAccess}/>
                :
                null
            }
        </Template>
    );
};

export default Main;