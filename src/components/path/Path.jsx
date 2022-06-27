import React from 'react';
import cl from "./Path.module.scss";
import {useNavigate} from "react-router-dom";

const Path = ({path}) => {

    const navigate = useNavigate()

    return (
        <div className={cl.pathWrap}>
            <div className={cl.inner}>
                {path.map((p, index, array) =>
                    index !== array.length -1 ?
                        <div key={index}>
                            <span className={cl.crosh} onClick={() => navigate(p.path)}>{p.page}</span>
                            <span className={cl.croshLine}>/</span>
                        </div>
                        :
                        <span key={index} className={cl.croshCurrent} onClick={() => navigate(p.path)}>{p.page}</span>
                )}
            </div>
        </div>
    );
};

export default Path;