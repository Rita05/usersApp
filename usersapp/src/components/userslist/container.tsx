import { connect } from 'react-redux'
import UsersList from './view'
import { useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom'
import action from './action'
import { User } from './reducer'

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


    const onUserProfileRedirect=()=>{
        setRedirectToUserProfile(true)
    }

    if(isRedirectToUserProfile){
        return <Navigate to='/userprofile' replace={true}/>
    }

    const templateProps = {
        users: props.users,
        onUserProfileRedirect
    }

    return (
        <>
            {
                <UsersList {...templateProps}/>
            }
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
        ongetUsersFromInterval: () => dispatch(action.ongetUsersAction())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer)