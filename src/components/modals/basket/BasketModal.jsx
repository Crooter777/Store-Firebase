import React, {useContext, useState} from 'react';
import cl from './BasketModal.module.scss'
import CloseSVG from "../../SVG/CloseSVG";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {Context} from "../../../index";
import {toJS} from "mobx";
import Kyrgyzstan from "../../SVG/countrys/Kyrgyzstan";
import Japan from "../../SVG/countrys/Japan";
import Belgium from "../../SVG/countrys/Belgium";

const BasketModal = ({isOpen, accessModal, setOpen}) => {

    const {Basket} = useContext(Context)

    const [status, setStatus] = useState(false)

    const [numbers, setNumbers] = useState([
        {flag: <Kyrgyzstan/>, code: '+996'},
        {flag: <Japan/>, code: '+81'},
        {flag: <Belgium/>, code: '+32'},
    ])
    const [currentNumber, setCurNumber] = useState(0)
    const [isNumberOpen, setNumberOpen] = useState(false)


    return (
        <div className={cl.modal} onClick={(e) => {
            setOpen(false)
        }}>
            <div className={cl.wrap}>
                <div
                    onClick={(e) => {
                        e.stopPropagation()
                        // setNumberOpen(true)
                    }}
                    className={cl.inner}
                >
                    <h1>Оформление заказа</h1>
                    <div className={cl.close}>
                        <CloseSVG
                            onClick={(e) => {
                                setOpen(false)
                            }}
                        />
                    </div>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', phone: '', country: '', city: '', offer: false }}
                        validationSchema={Yup.object({
                            firstName: Yup.string().required(),
                            lastName: Yup.string().required(),
                            email: Yup.string().email().required(),
                            phone: Yup.number().required(),
                            country: Yup.string().required(),
                            city: Yup.string().required(),
                            offer: Yup.bool().oneOf([true]).required(),
                        })}
                        onSubmit={(values) => {
                            values.products = toJS(Basket.products)
                            setOpen(false)
                            accessModal(true)
                            console.log(values)
                        }}
                    >
                        {formik => (
                            <>
                                <span
                                    className={formik.touched.firstName && formik.errors.firstName ? `${cl.subtitle} ${cl.active}` : cl.subtitle}
                                >
                                    Ваше имя
                                </span>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder='Например Азамат'
                                    className={formik.touched.firstName && formik.errors.firstName ? `${cl.input} ${cl.active}` : cl.input}
                                    {...formik.getFieldProps('firstName')}
                                />

                                <span
                                    className={formik.touched.lastName && formik.errors.lastName ? `${cl.subtitle} ${cl.active}` : cl.subtitle}
                                >
                                    Ваша фамилия
                                </span>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder='Например Азамат уулу'
                                    className={formik.touched.lastName && formik.errors.lastName ? `${cl.input} ${cl.active}` : cl.input}
                                    {...formik.getFieldProps('lastName')}
                                />

                                <span
                                    className={formik.touched.email && formik.errors.email ? `${cl.subtitle} ${cl.active}` : cl.subtitle}
                                >
                                    Электронная почта
                                </span>
                                <input
                                    id="email"
                                    type="text"
                                    placeholder='example@mail.com'
                                    className={formik.touched.email && formik.errors.email ? `${cl.input} ${cl.active}` : cl.input}
                                    {...formik.getFieldProps('email')}
                                />

                                <span
                                    className={formik.touched.phone && formik.errors.phone ? `${cl.subtitle} ${cl.active}` : cl.subtitle}
                                >
                                    Ваш номер телефона
                                </span>
                                <div className={formik.touched.phone && formik.errors.phone ? `${cl.numberWrap} ${cl.active}` : cl.numberWrap}>
                                    <div className={cl.number}>
                                        <div
                                            onClick={() => setNumberOpen(bool => !bool)}
                                            className={cl.numberSelected}
                                        >
                                            {numbers[currentNumber].flag}
                                            {numbers[currentNumber].code}
                                            <div className={cl.triangle}></div>
                                        </div>
                                        {isNumberOpen ?
                                            <div className={cl.numbers}>
                                                {numbers.map((number, index) =>
                                                    <div onClick={() => {
                                                        setNumberOpen(false)
                                                        setCurNumber(index)
                                                    }}
                                                        key={index}
                                                        className={cl.numberItem}
                                                    >
                                                        {number.flag} {number.code}
                                                    </div>
                                                )}
                                            </div>
                                            :
                                            null
                                        }

                                    </div>
                                    <input
                                        id="phone"
                                        type="text"
                                        placeholder='Введите номер телефона'
                                        className={cl.input}
                                        {...formik.getFieldProps('phone')}
                                    />
                                </div>
                                <span
                                    className={formik.touched.country && formik.errors.country ? `${cl.subtitle} ${cl.active}` : cl.subtitle}
                                >
                                    Страна
                                </span>
                                <input
                                    id="country"
                                    type="text"
                                    placeholder='Введите страну'
                                    className={formik.touched.country && formik.errors.country ? `${cl.input} ${cl.active}` : cl.input}
                                    {...formik.getFieldProps('country')}
                                />

                                <span
                                    className={formik.touched.city && formik.errors.city ? `${cl.subtitle} ${cl.active}` : cl.subtitle}
                                >
                                    Город
                                </span>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder='Введите город'
                                    className={formik.touched.city && formik.errors.city ? `${cl.input} ${cl.active}` : cl.input}
                                    {...formik.getFieldProps('city')}
                                />

                                <div className={cl.offerWrap}>
                                    <input
                                        id="offer"
                                        type="checkbox"
                                        placeholder='Введите город'
                                        onClick={() => setStatus(true)}
                                        {...formik.getFieldProps('offer')}
                                    />
                                    <span>Согласен с условиями <a href="">публичной оферты</a></span>
                                </div>
                                <button
                                    type='button'
                                    onClick={formik.handleSubmit}
                                    className={
                                        formik.isValid && status
                                        ?
                                        `${cl.btn} ${cl.active}` : cl.btn
                                    }
                                >
                                    Заказать
                                </button>
                            </>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default BasketModal;
