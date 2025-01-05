import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import {Loading, Vedios} from './'
import { FetchApi } from '../utils/FetchApi'
import { useParams } from 'react-router-dom'




export default function SearchFeed() {
const {searchTerm}=useParams()
const [vedios,setVedios]=useState([])
const [isLoading,setIsloading]=useState(false)

useEffect(()=>{
  setIsloading(true)
FetchApi(`search?part=snippet&q=${searchTerm}`)
.then(res=>{
  console.log(res)
  setVedios(res.items)
})
.catch(er=>console.log(er))
.finally(()=>{
  setIsloading(false)
})

},[searchTerm])




  return <Box   p={2} sx={{ overflowY: "auto", flex: 2 }}>
  <Typography variant='h4' fontWeight='bold' sx={{color:'white',mb:2}}>Search Results For: <span style={{color:"#fc1503"}}>{searchTerm}</span> vedios</Typography>
{!isLoading?  <Vedios vedios={vedios}/>:<Loading/>}
</Box>
}
