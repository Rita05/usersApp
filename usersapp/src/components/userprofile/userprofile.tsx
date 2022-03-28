import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import "./style.scss";
import {User} from '../userslist/reducer'
import Button from '../button/button'

export type PropTypes = {
    onSubmit: (values: InputTypes) => void,
    onEdit?: boolean,
    onEditBtnClick?: () => void,
    user: User
}

export type InputTypes={
    name: string,
    username: string,
    email: string,
    street: string,
    city: string,
    zipcode: string,
    phone: string,
    website: string,
    comment: string
}

const UserProfileForm=(props: PropTypes) : React.ReactElement =>  {

    const { onEdit } = props;

    const validationSchema = {
        name: Yup.string().required().max(30),
        username: Yup.string().required().max(30),
        email: Yup.string().email().required().max(30),
        street: Yup.string().required().max(30),
        city: Yup.string().required().max(30),
        zipcode: Yup.string().required().max(30),
        phone: Yup.string().required().max(30),
        website: Yup.string().required().max(30),
        comment: Yup.string().max(30),
    }


    const initialValues: InputTypes = {
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

    const formStyle="profile-form"
    const labelStyle = "profile-form__label";

    const selectInputStyle = (inputName: string, formik: any) => {
        if (!onEdit) {
            return "profile-form__input profile-form__input_disabled";
        }
        const isInvalid = formik.touched[inputName] && formik.errors[inputName];
        if (isInvalid) {
            return "profile-form__input profile-form__input_invalidated";
        }
        return "profile-form__input profile-form__input_enabled";
    }

    const selectCommentStyle = () => {
        return onEdit ? "profile-form__comment profile-form__comment_enabled" : "profile-form__comment profile-form__comment_disabled";
    }

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={Yup.object(validationSchema)}
                    onSubmit={props.onSubmit}>
                {formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <div className="profile-form__header">
                            <div className="profile-form__header-title">
                                Профиль пользователя
                            </div>
                            <Button type="button" style={{width: "116.67px", height: "27.12px"}} onClick={props.onEditBtnClick}>Редактировать</Button>
                        </div>
                       
                        <div className={formStyle}>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="name">Name</label>
                            <input readOnly={!onEdit} className={selectInputStyle("name", formik)} id="name" 
                                   type="text"{...formik.getFieldProps('name')}/>
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="username">User Name</label>
                            <input readOnly={!onEdit} className={selectInputStyle("username", formik)} id="username" 
                                   type="text"{...formik.getFieldProps('username')}/>
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="email">E-mail</label>
                            <input readOnly={!onEdit} className={selectInputStyle("email", formik)} id="email"
                                   type="email" {...formik.getFieldProps('email')} />
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="street">Street</label>
                            <input readOnly={!onEdit} className={selectInputStyle("street", formik)} id="street"
                                   type="text"{...formik.getFieldProps('street')} />
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="city">City</label>
                            <input readOnly={!onEdit} className={selectInputStyle("city", formik)} id="city"
                                   type="text"{...formik.getFieldProps('city')}/>
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="zipcode">Zip Code</label>
                            <input readOnly={!onEdit} className={selectInputStyle("zipcode", formik)} id="zipcode"
                                   type="text"{...formik.getFieldProps('zipcode')}/>
                        </div>           
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="phone">Phone</label>
                            <input readOnly={!onEdit} className={selectInputStyle("phone", formik)} id="phone"
                                   type="text"{...formik.getFieldProps('phone')}/>
                        </div>           
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="website">Website</label>
                            <input readOnly={!onEdit} className={selectInputStyle("website", formik)} id="website"
                                   type="text"{...formik.getFieldProps('website')}/>
                        </div>
                        <div className='profile-form__input-group'>
                            <label className={labelStyle} htmlFor="comment">Comment</label>
                            <input readOnly={!onEdit} className={selectCommentStyle()} id="comment"
                                   type="text"{...formik.getFieldProps('comment')}/>
                        </div>
                        </div>
                        <div className="profile-form__btnSubmit-wrapper">
                            <Button disabled={!onEdit} type="submit">Отправить</Button>
                        </div>
                    </form>
                )}
            </Formik>

        </div>
    );
};

export default UserProfileForm