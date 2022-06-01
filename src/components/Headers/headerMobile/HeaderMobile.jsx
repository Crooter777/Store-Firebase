import React, {useState} from 'react';
import cl from './HeaderMobile.module.scss'
import LogoSVG from "../../SVG/LogoSVG";
import SearchSVG from "../../SVG/SearchSVG";

const HeaderMobile = () => {

    const [isActive, setActive] = useState(false)

    return (
        <div className={cl.wrapper}>
            <div
                onClick={(e) => {
                    setActive(true)
                }}
                className={cl.burger}
            >
                <div className={cl.line}></div>
                <div className={cl.line}></div>
                <div className={cl.line}></div>
            </div>
            <LogoSVG style={{width: '99px'}}/>
            <div>
                <SearchSVG/>
            </div>
            <div
                onClick={() => {
                    console.log(isActive)
                    setActive(false)
                }}
                className={isActive ? `${cl.windowBack} ${cl.active}` : cl.windowBack}
            >
                <div
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                    className={cl.window}
                >

                </div>
            </div>
        </div>
    );
};

export default HeaderMobile;