import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
type Props = {}

const App = (props: Props) => {
  return (
    <Box width='400px' sx={{width: { x1: '1488px' }}} m='auto'>
        <Navbar />
        <Routes>
            <Route path='/fitness-app/' element={<Home />} />
            <Route path='/fitness-app/exercise/:id' element={<ExerciseDetails />}  />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App
