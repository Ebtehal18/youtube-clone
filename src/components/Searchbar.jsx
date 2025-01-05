import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, Paper } from '@mui/material'
import Search from '@mui/icons-material/Search';
export default function Searchbar() {
  const [searchTerm,setSearch]=useState("")
  const navigate=useNavigate()
function handelSub(e){

e.preventDefault()
if(searchTerm){
  navigate(`/search/${searchTerm}`)
  setSearch('')
}

}
  return (
    <Paper component={'form'}
     sx={{borderRadius:20 ,pl:2,border:'1px solid #e3e3e3',boxShadow:"none",mr:{sm:5}}}
      onSubmit={handelSub}>
        <input type='text' 
        placeholder='Search...'
         value={searchTerm} 
        onChange={(e)=>{setSearch(e.target.value)}} 
        className='search-bar'/>


        <IconButton type='submit' sx={{padding:'10px',color:'red'}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}
