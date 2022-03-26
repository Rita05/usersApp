import UsersListApi from './userapi'

export const TYPES = {
    TYPE_ONGET_USERS: 'get-array-users',
    TYPE_SEND_USER_PROFILE_DATA: 'send-profile-data'
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

const sendUserProfileDataAction=(user: any)=>{
    return{
        type: TYPES.TYPE_SEND_USER_PROFILE_DATA,
        user: user
    }
}

export default{
    ongetUsersAction,
    sendUserProfileDataAction
}