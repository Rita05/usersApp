import * as React from 'react';
import { styled } from '@mui/material/styles';
import { List, ListItem, Grid, Typography, ListItemText, Card, CardContent } from '@mui/material';
import {UsersListItem} from './useritem'

const UsersList = (props: any) => {

    return (
        // <Grid item xs={12} md={6}>
        <Grid container spacing={24} style={{padding: 24}}>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
                <UsersListItem users={props.users}/>
            </Grid>
        </Grid>
        // </Grid>
    )

}


export default UsersList