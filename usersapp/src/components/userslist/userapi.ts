import { User } from './reducer'

class UsersListApi {
  async getUsers(): Promise<User[]> {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
  }
}

export default new UsersListApi()