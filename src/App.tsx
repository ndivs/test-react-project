import { Box } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import './App.css'
import MiniDrawer from './Components/MiniDrawer'

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <MiniDrawer />
      </Box>
    </div>
  )
}

export default App
