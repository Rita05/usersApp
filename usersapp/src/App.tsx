import React from 'react'
import './App.css'
import { Container, Box} from '@mui/material'
import UsersPage from './components/pages/userspage'

function App() {
  return (
    <Container>
      <Box className="Box">
          <UsersPage/>
      </Box>
    </Container> 
  );
}

export default App;
