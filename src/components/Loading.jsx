import { Box } from '@mui/material'
import React from 'react'
import { Hearts } from 'react-loader-spinner'

export default function Loading() {
  return <Box sx={{height:'100vh' ,display:"flex",justifyContent:'center',alignItems:'center'}}>
    <Hearts
  height="80"
  width="80"
  color="#fc1503"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  </Box>
}
