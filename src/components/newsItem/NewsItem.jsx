import React, {useState} from 'react';
import cl from "../../styles/News.module.scss";
import img from "../../assets/img/News/Rectangle 507.jpg";
import {observer} from "mobx-react-lite";

const NewsItem = ({news}) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className={cl.news}>
            <img src={news.image} alt=""/>
            <div className={cl.content}>
                <div
                    className={isOpen ? `${cl.info} ${cl.active}` : cl.info}
                >
                    <h3 className={cl.title}>{news.title}</h3>
                    <span className={cl.text}>{news.description}</span>
                </div>
                <button
                    onClick={() => {
                        setOpen(bool => !bool)
                    }}
                    className={cl.btn}
                >
                    {isOpen ? 'Скрыть' : 'Читать полностью'}</button>
            </div>
        </div>
    );
};

export default observer(NewsItem);