import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import Searchbar from './Searchbar'


export default function Navbar() {
  return (
    <Stack direction="row" sx={{backgroundColor:"#000",p:2,alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:20}}>
<Link to={'/'}>
<img src={logo} alt="logo" height={45}  />
</Link>
<Searchbar/>


      </Stack>
  )
}
