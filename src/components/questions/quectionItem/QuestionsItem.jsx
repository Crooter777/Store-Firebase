import React, {useState} from 'react';
import cl from "./QuestionsItem.module.scss"
import ArrowBottomSVG from "../../SVG/ArrowBottomSVG";

const QuestionsItem = ({question}) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div
            onClick={() => setOpen(bool => !bool)}
            className={cl.question}
        >
            <div className={cl.titleWrap}>
                <h3 className={cl.title}>{question.title}</h3>
                <ArrowBottomSVG className={isOpen ? `${cl.arrow} ${cl.active}` : cl.arrow}/>
            </div>
            <span
                className={isOpen ? `${cl.text} ${cl.active}` : cl.text}
            >
                {question.description}
            </span>
        </div>
    );
};

export default QuestionsItem;