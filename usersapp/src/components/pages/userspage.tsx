import UsersListContainer from '../userslist/container'
import SortPanel from '../sortpanel/view'
import './users-page-styles.css'

const UsersPage = () => {
    return (
        <div className="page_container">
            <div className="sort_container">
               <SortPanel/> 
            </div>
            <div className="users_container">
               <UsersListContainer/>
            </div>
        </div>
    )
}

export default UsersPage