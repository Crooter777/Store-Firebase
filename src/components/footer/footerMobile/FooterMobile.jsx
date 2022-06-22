import React, {useEffect, useState} from 'react';
import cl from './FooterMobile.module.scss'
import LogoSVG from "../../SVG/LogoSVG";
import Logo2SVG from "../../SVG/Logo2SVG";
import PhoneSVG from "../../SVG/PhoneSVG";
import EmailSVG from "../../SVG/EmailSVG";
import InstagramSVG from "../../SVG/InstagramSVG";
import TelegramSVG from "../../SVG/TelegramSVG";
import WhatsappSVG from "../../SVG/WhatsappSVG";
import axios from "axios";

const FooterMobile = () => {

    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(true)

    async function load() {
        const response = await axios.get('http://localhost:8000/contacts/')
        setData(response.data[0])
        setLoading(false)
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <div className={cl.footer}>
            <div className={cl.wrapper}>
                <div className={cl.inner}>
                    <div className={cl.logo}>
                        <Logo2SVG/>
                    </div>
                    <div className={cl.infoWrapper}>
                        <div className={cl.info}>
                            <h3>Компания</h3>
                            <span>О нас</span>
                            <span>Новости</span>
                            <span>Помощь</span>
                        </div>
                        {!isLoading && data ?
                            <>
                                <div className={cl.info}>
                                    <h3>Контакты</h3>
                                    <div>
                                        <PhoneSVG/>
                                        <span>{data.phone1}</span>
                                    </div>
                                    <div>
                                        <PhoneSVG/>
                                        <span>{data.phone2}</span>
                                    </div>
                                    <div>
                                        <EmailSVG/>
                                        <span>{data.email}</span>
                                    </div>
                                </div>
                                <div className={cl.info}>
                                    <h3>Мы в социальных сетях</h3>
                                    <div>
                                        <InstagramSVG/>
                                        <a href={data.instagram} target="_blank">Instagram</a>
                                    </div>
                                    <div>
                                        <TelegramSVG/>
                                        <a href={data.telegram} target="_blank">Telegram</a>
                                    </div>
                                    <div>
                                        <WhatsappSVG/>
                                        <a href={data.whatsapp} target="_blank">Whatsapp</a>
                                    </div>
                                </div>
                            </>
                            :
                            null
                        }
                        <p className={cl.developed}>Developed by Zeon 2022</p>
                    </div>
                </div>
            </div>
            <div className={cl.separator}></div>
        </div>
    );
};

export default FooterMobile;