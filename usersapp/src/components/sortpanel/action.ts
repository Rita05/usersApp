export const TYPES = {
    TYPE_SORT_BY_CITY: 'sort-by-city-users',
    TYPE_SORT_BY_COMPANY: 'sort-by-company-users'
}

const sortByCityAction = () => {
    return {
        type: TYPES.TYPE_SORT_BY_CITY
    }
}

const sortByCompanyAction = () => {
    return {
        type: TYPES.TYPE_SORT_BY_COMPANY
    }
}

export default {
    sortByCityAction,
    sortByCompanyAction
}