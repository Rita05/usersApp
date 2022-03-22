import Styles from './userslist.module.css'
import { List, ListItem, ListItemText, Card, CardContent } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const UsersListItem=(props: any)=>{

    const theme = createTheme({
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow: 'none',
                borderRadius: '8px',
              },
            },
          },
          MuiList: {
            styleOverrides: {
                root: {
                    padding: '0 0 10px 0'
                }
                
            }
          }
        },
      });

    return(
        <>
        <ThemeProvider theme={theme}>
        {props.users.map((user:any) =>
        <Card key={user.id} className={Styles.Card}>
        <CardContent className={Styles.CardContent}>
            <List> 
                <ListItem className={Styles.ListItem}>
                    <ListItemText className={Styles.ListItemText} disableTypography >ФИО: {user.name}</ListItemText>
                </ListItem>
                <ListItem className={Styles.ListItem}>
                    <ListItemText className={Styles.ListItemText} disableTypography >город: {user.address.city}</ListItemText>
                </ListItem>
                <ListItem className={Styles.ListItem}>
                    <ListItemText className={Styles.ListItemText} disableTypography >компания: {user.company.name}</ListItemText>
                </ListItem>   
            </List>
        </CardContent>
    </Card>
    )}
    </ThemeProvider>
    </>
    )

}



export default UsersListItem