import React, {useContext, useEffect, useState} from 'react';
import Template from "./Template";
import cl from '../styles/News.module.scss'
import img from '../assets/img/News/Rectangle 507.jpg'
import NewsItem from "../components/newsItem/NewsItem";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const News = () => {

    const {News} = useContext(Context)

    useEffect(() => {
        News.getProducts()
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
        </Template>
    );
};

export default observer(News);