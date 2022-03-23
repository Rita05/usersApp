import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import "./style.css";

export type PropTypes = {
    onSubmit: (values: any) => void,
    onEdit?: boolean,
    onEditBtnClick?: () => void
}

const UserProfileForm=(props: PropTypes) : React.ReactElement =>  {

    const { onEdit } = props;

    const validationSchema = {
        name: Yup.string().required(),
        userName: Yup.string().required(),
        email: Yup.string().email().required(),
        street: Yup.string().required(),
        city: Yup.string().required(),
        zipCode: Yup.number().required(),
        phone: Yup.number().required(),
        webSite: Yup.string().required(),
        comment: Yup.string(),
    }

    const initialValues = {
        name: '',
        userName: '',
        email: ''
    };

    const formStyle = props.onEdit ? "profile_form_enabled" : "profile_form_disabled";
    const labelStyle = "profile_form__label";

    const selectInputStyle = (inputName: string, formik: any) => {
        if (!onEdit) {
            return "profile_form__input_disabled";
        }
        const isInvalid = formik.touched[inputName] && formik.errors[inputName];
        if (isInvalid) {
            return "profile_form__input_invalidated";
        }
        return "profile_form__input_enabled";
    }

    const selectCommentStyle = () => {
        return onEdit ? "profile_form__comment_enabled" : "profile_form__comment_disabled";
    }

    const selectSubmitBtnStyle = () => {
        return onEdit ? "profile_form__btnSubmit_enabled" : "profile_form__btnSubmit_disabled";
    }

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={Yup.object(validationSchema)}
                    onSubmit={props.onSubmit}>
                {formik => (
                    <form /*className={formStyle}*/ onSubmit={formik.handleSubmit}>
                        <div className="profile_form__header">
                            <div className="profile_form__header__title">
                                Профиль пользователя
                            </div>
                            <button className="profile_form__header__editBtn" onClick={props.onEditBtnClick}>
                                Редактировать
                            </button>
                        </div>
                        <div className={formStyle}>
                        <div className='profile-input-group'>
                            <label className={labelStyle} htmlFor="name">Name</label>
                            <input readOnly={!onEdit} className={selectInputStyle("name", formik)} id="name"
                                   type="text"{...formik.getFieldProps('name')} placeholder='Иван Иванов'/>
                        </div>
                        <div className='profile-input-group'>
                            <label className={labelStyle} htmlFor="userName">User Name</label>
                            <input readOnly={!onEdit} className={selectInputStyle("userName", formik)} id="userName"
                                   type="text"{...formik.getFieldProps('userName')} placeholder='Ivan'/>
                        </div>
                        <div className='profile-input-group'>
                            <label className={labelStyle} htmlFor="email">E-mail</label>
                            <input readOnly={!onEdit} className={selectInputStyle("email", formik)} id="email"
                                   type="email" {...formik.getFieldProps('email')} placeholder='example@mail.com'/>
                        </div>
                        <div className='profile-input-group'>
                            <label className={labelStyle} htmlFor="street">Street</label>
                            <input readOnly={!onEdit} className={selectInputStyle("street", formik)} id="street"
                                   type="text"{...formik.getFieldProps('street')} placeholder='ул. Пример'/>
                        </div>
                        <div className='profile-input-group'>
                            <label className={labelStyle} htmlFor="city">City</label>
                            <input readOnly={!onEdit} className={selectInputStyle("city", formik)} id="city"
                                   type="text"{...formik.getFieldProps('city')} placeholder='Москва'/>
                        </div>
                        <div className='profile-input-group'>
                            <label className={labelStyle} htmlFor="zipCode">Zip Code</label>
                            <input readOnly={!onEdit} className={selectInputStyle("zipCode", formik)} id="zipCode"
                                   type="number"{...formik.getFieldProps('zipCode')} placeholder='1234234'/>
                        </div>           
                        <div className='profile-input-group'>
                            <label className={labelStyle} htmlFor="phone">Phone</label>
                            <input readOnly={!onEdit} className={selectInputStyle("phone", formik)} id="phone"
                                   type="number"{...formik.getFieldProps('phone')} placeholder='89991112233'/>
                        </div>           
                        <div className='profile-input-group'>
                            <label className={labelStyle} htmlFor="webSite">Website</label>
                            <input readOnly={!onEdit} className={selectInputStyle("webSite", formik)} id="webSite"
                                   type="text"{...formik.getFieldProps('webSite')} placeholder='www.example.com'/>
                        </div>
                        <div className='profile-input-group'>
                            <label className={labelStyle} htmlFor="comment">Comment</label>
                            <input readOnly={!onEdit} className={selectCommentStyle()} id="comment"
                                   type="text"{...formik.getFieldProps('comment')}/>
                        </div>
                        </div>
                        <div className="profile_form__btnSubmit__wrapper">
                            <button className={selectSubmitBtnStyle()} type="button">Отправить</button>
                        </div>
                    </form>
                )}
            </Formik>

        </div>
    );
};

export default UserProfileForm