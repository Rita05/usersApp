
import React, { useState } from 'react'
import UserProfileForm from './userprofile'
import { connect } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { User } from '../userslist/reducer'
import action from '../userslist/action'

const UserProfile=(props: any) => {
    const [onEdit, setOnEdit] = useState(false);

    const onSubmit = (values: any) => {
        console.log(JSON.stringify(values));
    };

    const onEditBtnClick = () => {
        setOnEdit(!onEdit);
    };

    const templateProps={
        user: props.user,
        onSubmit,
        onEditBtnClick,
        onEdit
    }

    if (!props.user) {
        props.requireUsersList()
    }

    return (
        <>
        {
            props.user 
            ? <UserProfileForm {...templateProps}/>
            : <CircularProgress />
        }
        </>
    );
};

const  getEditingUserByIdPath=(users: User[]) : User | undefined =>{
    const id = new URLSearchParams(window.location.search).get('id')
    if (id === null) {
        return undefined
    }
    const intId = parseInt(id)
    const user = users.find(u => u.id === intId)
    return user
}

const mapStateToProps = (state: any) => {
    const { users } = state.usersListState
    const user = getEditingUserByIdPath(users)
    return {
        user
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        requireUsersList: () => dispatch(action.ongetUsersAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserProfile)