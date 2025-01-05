import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return <>
  <Box sx={{backgroundColor:"#000"}}>
  <Navbar/>
    <Outlet/>
  </Box>
  </>
}
