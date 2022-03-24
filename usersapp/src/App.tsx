import React from 'react'
import './App.css'
import { Container, Box } from '@mui/material'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import UsersPage from './components/pages/userspage'
import UserProfile from './components/userprofile/container'
import UserProfilePage from './components/pages/profilepage'

interface Props { }

const App: React.FC<Props> = ({ }) => {
  return (
    <Container>
      <Box className="Box">
        {/* <UsersPage/> */}
        {/* <UserProfile/> */}
        {/* <UserProfilePage/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersPage/>} />
            <Route path="/userprofile" element={<UserProfilePage/>} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Container>
  );
}

export default App;
