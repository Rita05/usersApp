class UsersListApi {
    async getUsers(){
      let response=await fetch('https://jsonplaceholder.typicode.com/users')
      return await response.json()
  }
}

export default new UsersListApi()