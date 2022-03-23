import { connect } from 'react-redux'
import UsersList from './view'
import { useEffect } from 'react'
import action from './action'
import { User } from './reducer'

export type PropsType = {
    users: User[], 
    ongetUsersFromInterval: () => void
}

const UsersListContainer = (props: any): React.ReactElement => {
    useEffect(() => {
        props.ongetUsersFromInterval()
        const interval = setInterval(() => {
            props.ongetUsersFromInterval()
            console.log('Users loading')
        }, 5000)
        return () => clearInterval(interval)
    }, [])


    const templateProps = {
        users: props.users
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