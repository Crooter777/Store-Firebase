import React, {useState} from 'react';
import Template from "./Template";
import cl from '../styles/News.module.scss'
import img from '../assets/img/News/Rectangle 507.jpg'

const News = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <Template>
            <h1 className={cl.pagetitle}>Новости</h1>
            <div className={cl.wrap}>
                <div className={cl.news}>
                    <img src={img} alt=""/>
                    <div className={cl.content}>
                        <div
                            className={isOpen ? `${cl.info} ${cl.active}` : cl.info}
                        >
                            <h3 className={cl.title}>Lorem ipsum dolor sit amet</h3>
                            <span className={cl.text}>Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra pharetra, augue neque felis enim dui id cum. At pellentesque diam nulla ac amet quisque quis. Est consectetur ullamcorper curabitur quis viverra hac molestie. Elit pulvinar congue ut amet adipiscing felis tincidunt. Amet quis varius aliquam hendrerit tempus. Sed sit diam quis scelerisque congu econgu econgu econguecongu econguecon guecon guecon guecong ueconguecong uec ongue.
Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra pharetra, augue neque  Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra pharetra, augue neque felis enim dui id cum. At pellentesque diam nulla ac amet quisque quis. Est consectetur ullamcorper curabitur quis viverra hac molestie. Elit pulvinar congue ut amet adipiscing felis tincidunt. Amet quis varius aliquam hendrerit tempus. Sed sit diam quis </span>
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
            </div>
        </Template>
    );
};

export default News;