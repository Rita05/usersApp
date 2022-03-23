import { Grid, Box } from '@mui/material'
import UsersListContainer from '../userslist/container'
import SortPanel from '../sortpanel/view'
import './users-page-styles.css'

const UsersPage = (props: any) => {
    return (
        // <Grid container columns={6}>
        //     <Grid style={{
        //         minWidth: "152px !important;", 
        //         maxWidth: "152px !important;"
        //         }} item xs={2}>
        //         <SortPanel/>
        //     </Grid>
        //     <Grid style={{
        //         minWidth: "665px !important;",
        //         maxWidth: "665px !important;",
        //         }} item xs={4}>
        //         <UsersListContainer/>
        //     </Grid>
        // </Grid>
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