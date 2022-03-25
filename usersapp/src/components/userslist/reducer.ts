import { TYPES } from './action'

export type Geo = {
    lat: string, 
    lng: string
}

export type Company = {
    name: string, 
    catchPhrase: string, 
    bs: string
}

export type Address = {
    street: string, 
    suite: string, 
    city: string, 
    zipcode: string, 
    geo: Geo
}

export type User = {
    id: number, 
    name: string, 
    username: string, 
    email: string, 
    address: Address,
    company: Company,
    phone: string, 
    website: string, 
}

export type StateType = {
    users: User[]
}

export const initialState: StateType = {
    users: new Array<User>()
}

export const UsersListReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        case TYPES.TYPE_ONGET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }


}

export default UsersListReducer