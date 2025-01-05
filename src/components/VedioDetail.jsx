import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { FetchApi } from '../utils/FetchApi'

import {Loading, Vedios} from './'


export default function VedioDetail() {
  const [vedio,setVedio]=useState(null)
  const [relatedVedios,setRelatedVedios]=useState([])
  const [isLoading,setIsloading]=useState(false)
  const {id} =useParams()

useEffect(()=>{
  // vedio details
  setIsloading(true)
FetchApi(`videos?part=snippet,statistics&id=${id}`)
.then(res=>{setVedio(res.items[0]);console.log(res)})
.catch(er=>console.log(er))
.finally(()=>{
  setIsloading(false)
})

// related vedios
FetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
.then(res=>{setRelatedVedios(res.items);console.log(res)})
.catch(er=>console.log(er))
.finally(()=>{
  setIsloading(false)
})
},[id])

  return <Box minHeight={'95vh'}>
    <Stack sx={{flexDirection:{xs:"column",md:"row"}}}>
  
<Box flex={1} sx={{position:{xs:"static",md:'sticky'},top:"86px",width:'100%'}}>
{!isLoading?<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player'  controls/>:<Loading/>}
<Typography sx={{p:2,color:"#fff"}} variant='h5' fontWeight={'bold'}>
  {vedio?.snippet?.title}
</Typography>
<Stack direction={'row'} justifyContent={'space-between'} py={2} px={2}>
 <Link to={`/channel/${vedio?.snippet?.channelId}`}>
 <Typography variant='subtitle1' sx={{color:"#fff"}}>
  {vedio?.snippet?.channelTitle}
  <CheckCircle sx={{color:"gray",ml:'5px'}} fontSize='12px' />
 </Typography>
 </Link>
 <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
  <Typography variant='body1' sx={{opacity:0.7,color:"#fff"}}>{parseInt(vedio?.statistics?.viewCount).toLocaleString()} Views</Typography>
  <Typography variant='body1' sx={{opacity:0.7,color:"#fff"}}>{parseInt(vedio?.statistics?.likeCount).toLocaleString()} Likes</Typography>
 </Stack>
</Stack>
</Box>


<Box px={2} py={1} justifyContent={'center'} alignItems={'center'}>
{!isLoading?<Vedios vedios={relatedVedios} direction='column'/>:<Loading/>}
    </Box>
    </Stack>
   
  </Box>
}
