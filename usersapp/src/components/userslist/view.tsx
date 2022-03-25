import './userslist.css'
import {User} from './reducer'

export const UsersList = (props: any) => {

  return (
    <>
      <div className='users-title'>Список пользователей</div>
      {props.users.map((user: User) =>
        <div key={user.id} className='user-item'>
        <div className='user-wrapper'>
          <div className='userblock'>
            <div className='userblock__info'>ФИО: {user.name}</div>
            <div className='userblock__info'>город: {user.address.city}</div>
            <div className='userblock__info'>компания: {user.company.name}</div>
            </div>
            <div className='user-redirect'>
              <a href="#" className='user-redirect__ref' onClick={()=>props.onUserProfileRedirect(user)}>Подробнее</a>
            </div>
        </div>
        </div>
      )}
      <div className='users-number'>Найдено {props.users.length} пользователей</div>
      </>
  )

}

export default UsersList