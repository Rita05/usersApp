
import React, { useState } from 'react'
import UserProfileForm from './userprofile'
import { connect } from 'react-redux'


const UserProfile=(props: any) => {
    const [onEdit, setOnEdit] = useState(false);

    const onSubmit = (values: any) => {
        console.log(JSON.stringify(values));
    };

    const onEditBtnClick = () => {
        setOnEdit(!onEdit);
    };

    const templateProps={
        user: props.user
    }

    return (
        <UserProfileForm {...templateProps} onSubmit={onSubmit} onEdit={onEdit} onEditBtnClick={onEditBtnClick}/>
    );
};

const mapStateToProps = (state: any) => {
    return {
        ...state.UserProfileReducer
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (UserProfile)