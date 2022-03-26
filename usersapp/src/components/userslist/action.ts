import UsersListApi from './userapi'

export const TYPES = {
    TYPE_ONGET_USERS: 'get-array-users'
}

const ongetUsers=(users: any)=>{
    return{
        type: TYPES.TYPE_ONGET_USERS,
        users: users
    }
}

export const ongetUsersAction=()=>async(dispatch: any)=>{
    // let users=UsersListApi.getTestUsers()
    let users=await UsersListApi.getUsers()
    if (users){
        dispatch(ongetUsers(users))
    }
}

export default{
    ongetUsersAction
}