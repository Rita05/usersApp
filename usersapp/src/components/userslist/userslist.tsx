import './style.scss'
import { User } from './reducer'

export type PropsType = {
  users: User[],
  onUserProfileRedirect: (arg: User) => void
}

export const UsersList = (props: PropsType) => {

  return (
    <>
      <div className='users-title'>Список пользователей</div>
      {props.users.map((user: User) =>
        <div key={user.id} className='user-item'>
          <div className='user-wrapper'>
            <div className='userblock'>
              <div className='userblock__row'>
                <div className='userblock__caption'>ФИО:</div>
                <div className='userblock__info'>{user.name}</div>
              </div>
              <div className='userblock__row'>
                <div className='userblock__caption'>город:</div>
                <div className='userblock__info'>{user.address.city}</div>
              </div>
              <div className='userblock__row'>
                <div className='userblock__caption'>компания:</div>
                <div className='userblock__info'>{user.company.name}</div>
              </div>
            </div>
            <div className='user-redirect'>
              <a href="#" className='user-redirect__ref' onClick={() => props.onUserProfileRedirect(user)}>Подробнее</a>
            </div>
          </div>
        </div>
      )}
      <div className='users-number'>Найдено {props.users.length} пользователей</div>
    </>
  )

}

export default UsersList