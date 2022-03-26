
import { TYPES } from './action'
import { TYPES as PanelActionsTypes } from '../sortpanel/action'

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

enum SortType {
    NONE, 
    BY_CITY, 
    BY_COMPANY
}

export type StateType = {
    users: User[], 
    sortType: SortType,
    isLoading: boolean
}

export const initialState: StateType = {
    users: new Array<User>(), 
    sortType: SortType.NONE,
    isLoading: true
}

function sortByCity(users: User[]): User[] {
    return users.sort((user1, user2) =>
        user1.address.city.localeCompare(user2.address.city))
}

function sortByCompany(users: User[]): User[] {
    return users.sort((user1, user2) =>
        user1.company.name.localeCompare(user2.company.name))
}

const sortUsers = (users: User[], sortType: SortType) => {
    if (sortType === SortType.NONE) {
        return users;
    }
    return sortType === SortType.BY_CITY ? sortByCity(users) : sortByCompany(users);
}

export const UsersListReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        case TYPES.TYPE_ONGET_USERS:
            return {
                ...state,
                users: sortUsers(action.users, state.sortType),
                isLoading: false
            }
        case PanelActionsTypes.TYPE_SORT_BY_CITY:
            return {
                ...state,
                sortType: SortType.BY_CITY, 
                users: sortUsers(state.users, SortType.BY_CITY)
            }
        case PanelActionsTypes.TYPE_SORT_BY_COMPANY:
            return {
                ...state,
                sortType: SortType.BY_COMPANY, 
                users: sortUsers(state.users, SortType.BY_COMPANY)
            }
        default:
            return state
    }


}

export default UsersListReducer