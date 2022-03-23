import './userslist.css'


export const UsersList = (props: any) => {

  return (
    <>
      <div className='users-title'>Список пользователей</div>
      {props.users.map((user: any) =>
        <div key={user.id} className='user-item'>
        <div className='user-wrapper'>
          <div className='userblock'>
            <div className='userblock-info'>ФИО: {user.name}</div>
            <div className='userblock-info'>город: {user.address.city}</div>
            <div className='userblock-info'>компания: {user.company.name}</div>
            </div>
            <div className='userblock-ref'>
              <a href="#" className='profile-ref'>Подробнее</a>
            </div>
        </div>
        </div>
      )}
      <div className='users-number'>Найдено {props.users.length} пользователей</div>
      </>
  )

}

export default UsersList