import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import "./style.css";
import {User} from '../userslist/reducer'

export type PropTypes = {
    onSubmit: (values: any) => void,
    onEdit?: boolean,
    onEditBtnClick?: () => void,
    user: User
}

const UserProfileForm=(props: PropTypes) : React.ReactElement =>  {

    const { onEdit } = props;

    const validationSchema = {
        name: Yup.string().required(),
        username: Yup.string().required(),
        email: Yup.string().email().required(),
        street: Yup.string().required(),
        city: Yup.string().required(),
        zipcode: Yup.string().required(),
        phone: Yup.string().required(),
        website: Yup.string().required(),
        comment: Yup.string(),
    }

    const initialValues = {
        name: props.user.name,
        username: props.user.username,
        email: props.user.email,
        street: props.user.address.street,
        city: props.user.address.city,
        zipcode: props.user.address.zipcode,
        phone: props.user.phone,
        website: props.user.website,
        comment: ''

    };

    // const formStyle = props.onEdit ? "profile-form_enabled" : "profile-form_disabled";
    const formStyle="profile-form_styled"
    const labelStyle = "profile-form__label";

    const selectInputStyle = (inputName: string, formik: any) => {
        if (!onEdit) {
            return "profile-form__input_disabled";
        }
        const isInvalid = formik.touched[inputName] && formik.errors[inputName];
        if (isInvalid) {
            return "profile-form__input_invalidated";
        }
        return "profile-form__input_enabled";
    }

    const selectCommentStyle = () => {
        return onEdit ? "profile-form__comment_enabled" : "profile-form__comment_disabled";
    }

    const selectSubmitBtnStyle = () => {
        return onEdit ? "profile-form__btnSubmit_enabled" : "profile-form__btnSubmit_disabled";
    }

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={Yup.object(validationSchema)}
                    onSubmit={props.onSubmit}>
                {formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <div className="profile-form__header">
                            <div className="profile-form__header__title">
                                Профиль пользователя
                            </div>
                            <button className="profile-form__header__editBtn" type="button" onClick={props.onEditBtnClick}>
                                Редактировать
                            </button>
                        </div>
                       
                        <div className={formStyle}>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="name">Name</label>
                            <input readOnly={!onEdit} className={selectInputStyle("name", formik)} id="name" 
                                   type="text"{...formik.getFieldProps('name')} placeholder='Иван Иванов'/>
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="username">User Name</label>
                            <input readOnly={!onEdit} className={selectInputStyle("username", formik)} id="username" 
                                   type="text"{...formik.getFieldProps('username')} placeholder='Ivan'/>
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="email">E-mail</label>
                            <input readOnly={!onEdit} className={selectInputStyle("email", formik)} id="email"
                                   type="email" {...formik.getFieldProps('email')} placeholder='example@mail.com'/>
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="street">Street</label>
                            <input readOnly={!onEdit} className={selectInputStyle("street", formik)} id="street"
                                   type="text"{...formik.getFieldProps('street')} placeholder='ул. Пример'/>
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="city">City</label>
                            <input readOnly={!onEdit} className={selectInputStyle("city", formik)} id="city"
                                   type="text"{...formik.getFieldProps('city')} placeholder='Москва'/>
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="zipcode">Zip Code</label>
                            <input readOnly={!onEdit} className={selectInputStyle("zipcode", formik)} id="zipcode"
                                   type="text"{...formik.getFieldProps('zipcode')} placeholder='1234234'/>
                        </div>           
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="phone">Phone</label>
                            <input readOnly={!onEdit} className={selectInputStyle("phone", formik)} id="phone"
                                   type="text"{...formik.getFieldProps('phone')} placeholder='89991112233'/>
                        </div>           
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="website">Website</label>
                            <input readOnly={!onEdit} className={selectInputStyle("website", formik)} id="website"
                                   type="text"{...formik.getFieldProps('website')} placeholder='www.example.com'/>
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="comment">Comment</label>
                            <input readOnly={!onEdit} className={selectCommentStyle()} id="comment"
                                   type="text"{...formik.getFieldProps('comment')}/>
                        </div>
                        </div>
                        <div className="profile-form__btnSubmit__wrapper">
                            <button disabled={!onEdit} className={selectSubmitBtnStyle()} type="submit">Отправить</button>
                        </div>
                    </form>
                )}
            </Formik>

        </div>
    );
};

export default UserProfileForm