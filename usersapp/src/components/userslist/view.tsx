import { Container, Card } from '@mui/material'
import './userslist.css'


export const UsersList = (props: any) => {

  return (
    // <Container className='userscontainer'>
    <>
      <div className='userscontainer-title'>Список пользователей</div>
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
    // </Container>
  )

}

export default UsersList