
import { useState } from 'react'
import UserProfileForm from './userprofile'
import { connect } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { User } from '../userslist/reducer'
import action from '../userslist/action'
import { PropTypes as ProfilePresentationTypes } from './userprofile'
import {InputTypes} from './userprofile'

export type PropTypes = {
    user: User | undefined,
    requireUsersList: () => void
}

export type ProfileStateType = {
    user: User | undefined
}

export type ProfileDispatchType = {
    requireUsersList: () => void
}

const UserProfile = (props: PropTypes) => {
    const [onEdit, setOnEdit] = useState<boolean | undefined>(false)

    const onSubmit = (values: InputTypes) => {
        console.log(JSON.stringify(values));
    };

    const onEditBtnClick = () => {
        setOnEdit(!onEdit);
    };

    if (!props.user) {
        props.requireUsersList()
    }

    if (props.user === undefined) {
        return <CircularProgress />
    }

    const templateProps: ProfilePresentationTypes = {
        user: props.user,
        onSubmit,
        onEditBtnClick,
        onEdit
    }

    return (
        <UserProfileForm {...templateProps} />

    );
};

const getEditingUserByIdPath = (users: User[]): User | undefined => {
    const id = new URLSearchParams(window.location.search).get('id')
    if (id === null) {
        return undefined
    }
    const intId = parseInt(id)
    const user = users.find(u => u.id === intId)
    return user
}

const mapStateToProps = (state: any): ProfileStateType => {
    const { users } = state.usersListState
    const user = getEditingUserByIdPath(users)
    return {
        user
    }
}

const mapDispatchToProps = (dispatch: any): ProfileDispatchType => {
    return {
        requireUsersList: () => dispatch(action.ongetUsersAction())
    }
}

export default connect<ProfileStateType, ProfileDispatchType>(mapStateToProps, mapDispatchToProps)(UserProfile)