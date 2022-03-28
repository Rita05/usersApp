import UsersListApi from './userapi'
import { User } from './reducer'

export const TYPES = {
    TYPE_ONGET_USERS: 'get-array-users'
}

const ongetUsers = (users: User[]) => {
    return {
        type: TYPES.TYPE_ONGET_USERS,
        users: users
    }
}

export const ongetUsersAction = () => async (dispatch: any) => {
    let users = await UsersListApi.getUsers()
    if (users) {
        dispatch(ongetUsers(users))
    }
}

export default {
    ongetUsersAction
}