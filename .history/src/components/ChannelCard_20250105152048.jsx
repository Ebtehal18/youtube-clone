import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

export default function ChannelCard({vedio,marginTop}) {
  return (
    <Box 
    sx={{boxShadow:"none",borderRadius:'20px',display:'flex',justifyContent:"center",
    alignItems:"center", width: { xs: '356px', md: '320px' } ,height: '326px',margin:"auto" ,marginTop}}>

        <Link to={`/channel/${vedio?.id?.channelId}`}>
        <CardContent 
        sx={{display:"flex",flexDirection:"column",alignItems:'center',textAlign:"center",color:'#fff'}}>
        <CardMedia 
        image={vedio?.snippet?.thumbnails?.high?.url||demoProfilePicture}
        sx={{width:180,height:180,borderRadius:'50%',mb:2,border:'1px solid #e3e3e3'}}
        alt={vedio?.snippet?.title}/>

<Typography variant='h6'>
    {vedio?.snippet?.title}
        <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
    
</Typography>
{vedio?.statistics?.subscriberCount&& <Typography>
    {parseInt(vedio?.statistics?.subscriberCount).toLocaleString()} Subsribers
    </Typography>}

        </CardContent>
       
        </Link>
    </Box>

  )
}
