import React, {useContext, useEffect, useState} from 'react';
import Template from "./Template";
import cl from '../styles/Help.module.scss'
import img from '../assets/img/help/Rectangle 684.jpg'
import ArrowBottomSVG from "../components/SVG/ArrowBottomSVG";
import {Context} from "../index";
import QuestionsItem from "../components/questions/QuestionsItem";

const Help = () => {

    const {Questions} = useContext(Context)

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            await Questions.getQuestions()
            setLoading(false)
        }
        load()
    }, [])

    return (
        <Template path={[
            {page: 'Главная', path: '/'},
            {page: 'Помощь'},
        ]}>
            <div className={cl.wrap}>
                <div className={cl.photo}>
                    <img src={img} alt=""/>
                </div>
                <div className={cl.info}>
                    <h1 className={cl.pageTitle}>Помощь</h1>
                    {!isLoading ?
                        Questions.questions.map((q) =>
                            <QuestionsItem question={q} key={q.id}/>
                        )
                        :
                        null
                    }
                </div>
            </div>
        </Template>
    );
};

export default Help;