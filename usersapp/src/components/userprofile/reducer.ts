import {TYPES} from '../userslist/action'

export const initialState = {
    user: {}
}


export const UserProfileReducer = (state=initialState, action: any) => {
    switch (action.type) {
        case TYPES.TYPE_SEND_USER_PROFILE_DATA:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }


}

export default UserProfileReducer