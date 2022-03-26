import { connect } from 'react-redux'
import UsersList from './view'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import action from './action'
import { User } from './reducer'
import {CircularProgress, Box} from '@mui/material'

export type PropsType = {
    users: User[],
    ongetUsersFromInterval: () => void
}

const UsersListContainer = (props: any): React.ReactElement => {

    const [isRedirectToUserProfile, setRedirectToUserProfile] = useState(false)

    useEffect(() => {

        props.ongetUsersFromInterval()
        const interval = setInterval(() => {
            props.ongetUsersFromInterval()
            console.log('Users loading')
        }, 5000)
        return () => clearInterval(interval)
    }, [])


    const onUserProfileRedirect = (user: any) => {
        props.sendUserProfileData(user)
        setRedirectToUserProfile(true)
    }

    if (isRedirectToUserProfile) {
        return <Navigate to='/userprofile' replace={true} />
    }

    const templateProps = {
        users: props.users,
        onUserProfileRedirect,
        isLoading: props.isLoading
    }

    // if (props.isLoading) {
    //     setInterval(() => {
    //         return <CircularProgress/>
    //     }, 5000) 
    // } 
    
    return (
        <>
            {props.isLoading ? <CircularProgress/>: <UsersList {...templateProps} /> }
        </>
    )

}

const mapStateToProps = (state: any) => {
    return {
        ...state.UsersListReducer
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        ongetUsersFromInterval: () => dispatch(action.ongetUsersAction()),
        sendUserProfileData: (user: any) => dispatch(action.sendUserProfileDataAction(user))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer)