import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../images/Logo.png'


type Props = {}

const Navbar = (props: Props) => {
    return (
        <Stack
            direction="row"
            justifyContent='space-around'
            sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
            px="20px"
        >
            <Link to="/">
                <img src={Logo} alt="logo" className="logo-image" />
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontSize="24px"
                alignItems="flex-end"
            >
                <Link to="/" className='navlink active'>Home</Link>
                <a href='#exercise' className='navlink'>Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar