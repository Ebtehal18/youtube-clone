import React from 'react';
import { Card, Typography, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants';

export default function VedioCard({ vedio }) {
  const { id, snippet } = vedio;
  const videoId = id?.videoId || demoVideoUrl; 



    return <Card 
  sx={{
    width: { xs: '100%', sm: '358px', md: "320px", },
    boxShadow: 'none',
    borderRadius: 0,
  }}

  >
  <Link to={videoId?`/vedio/${videoId}`:demoVideoUrl}>
  <CardMedia 
  image={snippet?.thumbnails?.high?.url}
  alt={snippet?.title}
  sx={{ width: { xs: '400px', sm: '358px'}, height: 'px' }} 
  />
<CardContent sx={{backgroundColor:"#1e1e1e",height:106}}>
<Link  to={videoId?`/vedio/${videoId}`:demoVideoUrl}>
<Typography variant='subtitle1' fontWeight={'bold'} color='#fff'>
    {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
</Typography>
</Link>

<Link  to={snippet?.channelId ?`/channel/${snippet?.channelId}`:demoChannelUrl}>
<Typography variant='subtitle2' fontWeight={'bold'} color='gray'>
    {snippet?.channelTitle||demoChannelTitle}
    <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
</Typography>
</Link>
</CardContent>

  </Link>
  </Card>
}

