// import Styles from './userslist.module.css'
import { Card } from '@mui/material';
import './userslist.css'


export const UsersListItem = (props: any) => {

  return (
    <>
      {props.users.map((user: any) =>
        <Card key={user.id} className='Card'>
          <div className='userblock'>
            <div className='userblock-info'>ФИО: {user.name}</div>
            <div className='userblock-info'>город: {user.address.city}</div>
            <div className='userblock-info'>компания: {user.company.name}</div>
            <div className='userblock-profileref'>
              <a href="#" className="userprofile-ref">Подробнее</a>
            </div>
          </div>
        </Card>
      )}
    </>
  )

}



export default UsersListItem