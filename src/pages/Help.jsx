import React, {useState} from 'react';
import Template from "./Template";
import cl from '../styles/Help.module.scss'
import img from '../assets/img/help/Rectangle 684.jpg'
import ArrowBottomSVG from "../components/SVG/ArrowBottomSVG";

const Help = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <Template>
            <div className={cl.wrap}>
                <div className={cl.photo}>
                    <img src={img} alt=""/>
                </div>
                <div className={cl.info}>
                    <h1 className={cl.pageTitle}>Помощь</h1>
                    <div
                        onClick={() => setOpen(bool => !bool)}
                        className={cl.question}
                    >
                        <div className={cl.titleWrap}>
                            <h3 className={cl.title}>Как я могу заказать одежду?</h3>
                            <ArrowBottomSVG className={isOpen ? `${cl.arrow} ${cl.active}` : cl.arrow}/>
                        </div>
                        <span
                            className={isOpen ? `${cl.text} ${cl.active}` : cl.text}
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. </span>
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default Help;