import UserProfile from '../userprofile/container'
import SortPanel from '../sortpanel/view'
import './users-page-styles.css'

const UserProfilePage = (props: any) => {
    return (
        <div className="page_container">
            <div className="sort_container">
               <SortPanel/>
            </div>
            <div className="users_container">
               <UserProfile/>
            </div>
        </div>
    )
}

export default UserProfilePage