import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Vedios,Sidebar,Loading} from './'
import { FetchApi } from '../utils/FetchApi'




export default function Feed() {
const [SelectedCatego,setSelectedCatego]=useState("ElzeroWebSchool")
const [vedios,setVedios]=useState(null)
const [isLoading,setIsloading]=useState(false)

useEffect(()=>{
  setIsloading(true)
FetchApi(`search?part=snippet&q=${SelectedCatego}`)
.then(res=>{
  console.log(res)
  setVedios(res.items)
})
.catch(er=>console.log(er))
.finally(()=>{
  setIsloading(false)
})

},[SelectedCatego])



  return <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
<Box sx={{ height: { sx: "auto" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
<Sidebar    SelectedCatego={SelectedCatego} setSelectedCatego={setSelectedCatego} />
<Typography sx={{color:"white",mt:1.5,textAlign:"center"}} variant='body2' className='copyright'>
  copyright 2025
</Typography>
</Box>
<Box   p={2} sx={{ overflowY: "auto", flex: 2 }}>
  <Typography variant='h4' fontWeight='bold' sx={{color:'white',mb:2}}>{SelectedCatego} <span style={{color:"#fc1503"}}>Vedios</span></Typography>
{!isLoading?  <Vedios vedios={vedios}/>:<Loading/>}
</Box>
  </Stack>
}
