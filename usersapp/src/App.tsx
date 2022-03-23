import React from 'react'
import './App.css'
import { Container, Box} from '@mui/material'
import UsersPage from './components/pages/userspage'
import UserProfile from './components/userprofile/container'

function App() {
  return (
    <Container>
      <Box className="Box">
          {/* <UsersPage/> */}
          <UserProfile/>
      </Box>
    </Container> 
  );
}

export default App;
