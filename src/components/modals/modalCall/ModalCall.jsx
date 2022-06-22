import React, {useState} from 'react';
import cl from './ModalCall.module.scss'
import UserSVG from "../../SVG/UserSVG";
import CloseSVG from "../../SVG/CloseSVG";
import Phone3SVG from "../../SVG/Phone3SVG";
import * as Yup from "yup";
import {toJS} from "mobx";
import {Formik} from "formik";

const ModalCall = ({isActive, setActive, setAccess}) => {

    const [status, setStatus] = useState(false)

    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                setActive(false)
            }}
            className={cl.modal}
        >
            <div
                onClick={(e) => {
                    e.stopPropagation()
                }}
                className={cl.inner}
            >
                <CloseSVG
                    onClick={(e) => {
                        setActive(false)
                    }}
                    className={cl.close}
                />
                <h2>Если у Вас остались вопросы</h2>
                <span>Оставьте заявку и мы обязательно Вам перезвоним</span>
                <Formik
                    initialValues={{ name: '', phone: ''}}
                    validationSchema={Yup.object({
                        name: Yup.string().required(),
                        phone: Yup.number().required(),
                    })}
                    onSubmit={(values) => {
                        setActive(false)
                        setAccess(true)
                        console.log(values)
                    }}
                >
                    {formik => (
                        <>
                        <div className={formik.touched.name && formik.errors.name ? `${cl.inputWrapper} ${cl.active}` : cl.inputWrapper}>
                            <div><UserSVG/></div>
                            <input
                                className={cl.input}
                                id="name"
                                type="text"
                                placeholder={"Как к вам обращаться?"}
                                {...formik.getFieldProps('name')}
                            />
                        </div>
                        <div className={formik.touched.phone && formik.errors.phone ? `${cl.inputWrapper} ${cl.active}` : cl.inputWrapper}>
                            <div><Phone3SVG/></div>
                            <input
                                onClick={() => setStatus(true)}
                                className={cl.input}
                                id="phone"
                                type="text"
                                placeholder={"Номер телефона?"}
                                {...formik.getFieldProps('phone')}
                            />
                        </div>
                            <button
                                type='button'
                                onClick={formik.handleSubmit}
                                className={
                                formik.isValid && status
                                    ?
                                `${cl.btn} ${cl.active}` : cl.btn}
                            >Заказать звонок</button>
                        </>
                    )}
                </Formik>


            </div>
        </div>
    );
};

export default ModalCall;