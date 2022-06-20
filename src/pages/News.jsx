import React, {useContext, useEffect, useRef, useState} from 'react';
import Template from "./Template";
import cl from '../styles/News.module.scss'
import img from '../assets/img/News/Rectangle 507.jpg'
import NewsItem from "../components/newsItem/NewsItem";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const News = () => {

    const {News} = useContext(Context)
    const lastElement = useRef()
    const observer = useRef()

    async function load() {
        await News.getProducts()
        let callback = function(entries, observer) {
            if (entries[0].isIntersecting) {
                News.getNext()
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <Template>
            <h1 className={cl.pagetitle}>Новости</h1>
            <div className={cl.wrap}>
                {News.news.length ?
                    News.news.map((news) =>
                        <NewsItem news={news} key={news.id}/>
                    )
                    :
                    null
                }
            </div>
            <div ref={lastElement}></div>
        </Template>
    );
};

export default observer(News);