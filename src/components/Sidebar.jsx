import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'


export default function Sidebar({setSelectedCatego,SelectedCatego}) {
  return <Stack 
   sx={{flexDirection:{sm:"row",md:'column'},
   height:{sm:"auto"},
   overflowY:"auto",
   marginInline:2

   }} >
{categories.map(catego=>{
    return <button key={catego.name} 
    className='category-btn'
    style={{backgroundColor:catego.name===SelectedCatego?"#fc1503":""}} 
    onClick={()=>setSelectedCatego(catego.name)}
     >
        <span style={{color:catego.name===SelectedCatego?'white':"red",marginRight:'15px'}}>{catego.icon}</span>
        <span style={{opacity:catego.name===SelectedCatego?'1':'0.8'}}>{catego.name}</span>
    </button>
})}
  </Stack>
}
