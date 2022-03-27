import React from 'react'
import './App.scss'
import { Container, Box } from '@mui/material'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import UsersListContainer from './components/userslist/container'
import UserProfile from './components/userprofile/container'
import PageWrapper from './components/pageswrapper/wrapper'

const App=()=> {
  return (
    <Container>
      <Box className="Box">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageWrapper><UsersListContainer/></PageWrapper>} />
            <Route path="/userprofile/*" element={<PageWrapper><UserProfile/></PageWrapper> } />
          </Routes>
        </BrowserRouter>
      </Box>
    </Container>
  );
}

export default App;
