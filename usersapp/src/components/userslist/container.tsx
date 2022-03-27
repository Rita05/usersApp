import { connect } from 'react-redux'
import UsersList from './userslist'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import action from './action'
import { User } from './reducer'
import {CircularProgress} from '@mui/material'
import {PropsType as UsersListPresentationType} from './userslist'

export type PropsType = {
    users: User[],
    ongetUsersFromInterval: () => void,
    isLoading: boolean
}

export type MyStateType={
    users: User[],
    isLoading: boolean
}

export type MyDispatchType={
    ongetUsersFromInterval: () => void
}

const UsersListContainer = (props: PropsType): React.ReactElement => {

    const [userForRedirect, setRedirectToUserProfile] = useState<User | undefined>(undefined)

    useEffect(() => {
        props.ongetUsersFromInterval()
        const interval = setInterval(() => {
            props.ongetUsersFromInterval()
            console.log('Users loading')
        }, 10000)
        return () => clearInterval(interval)
    }, [])

    const onUserProfileRedirect = (user: User) => {
        setRedirectToUserProfile(user)
    }

    if (userForRedirect) {
        return <Navigate to={`/userprofile?id=${userForRedirect.id}`} replace={true} />
    }

    const templateProps: UsersListPresentationType = {
        users: props.users,
        onUserProfileRedirect
    }

    return (
        <>
            {props.isLoading ? <CircularProgress/>: <UsersList {...templateProps} /> }
        </>
    )

}

const mapStateToProps = (state: any) : MyStateType=> {
    return {
        users: state.usersListState.users,
        isLoading: state.usersListState.isLoading

    }
}

const mapDispatchToProps = (dispatch: any) : MyDispatchType => {
    return {
        ongetUsersFromInterval: () => dispatch(action.ongetUsersAction())
    }

}

export default connect<MyStateType, MyDispatchType>(mapStateToProps, mapDispatchToProps)(UsersListContainer)