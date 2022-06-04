import React from 'react';
import cl from './Footer.module.scss'
import LogoSVG from "../../SVG/LogoSVG";
import Logo2SVG from "../../SVG/Logo2SVG";
import PhoneSVG from "../../SVG/PhoneSVG";
import EmailSVG from "../../SVG/EmailSVG";
import InstagramSVG from "../../SVG/InstagramSVG";
import TelegramSVG from "../../SVG/TelegramSVG";
import WhatsappSVG from "../../SVG/WhatsappSVG";
import FooterMobile from "../footerMobile/FooterMobile";

const Footer = () => {
    return (
        <>
        <div className={cl.footer}>
            <div className={cl.wrapper}>
                <div className={cl.inner}>
                    <div className={cl.logo}>
                        <Logo2SVG/>
                    </div>
                        <div className={cl.info}>
                            <h3>Компания</h3>
                            <span>О нас</span>
                            <span>Новости</span>
                            <span>Помощь</span>
                        </div>
                        <div className={cl.info}>
                            <h3>Контакты</h3>
                            <div>
                                <PhoneSVG/>
                                <span>+996 500 123 456</span>
                            </div>
                            <div>
                                <PhoneSVG/>
                                <span>+996 500 123 456</span>
                            </div>
                            <div>
                                <EmailSVG/>
                                <span>mail@gmail.com</span>
                            </div>
                        </div>
                        <div className={cl.info}>
                            <h3>Мы в социальных сетях</h3>
                            <div>
                                <InstagramSVG/>
                                <span>Instagram</span>
                            </div>
                            <div>
                                <TelegramSVG/>
                                <span>Telegram</span>
                            </div>
                            <div>
                                <WhatsappSVG/>
                                <span>Whatsapp</span>
                            </div>
                        </div>
                </div>
                <p className={cl.developed2}>Developed by Zeon 2022</p>
            </div>
        </div>
        <FooterMobile/>
    </>
);
};

export default Footer;