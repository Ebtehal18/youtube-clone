import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Vedios,ChannelCard, Loading} from './'
import { FetchApi } from '../utils/FetchApi'

export default function ChannelDetail() {
  const {id} =useParams()
  const [channeldetail,setChannelDetail]=useState(null)
  const [vedioesChannel,setvedioesChannel]=useState(null)

  
  useEffect(()=>{

    // channel detail
FetchApi(`channels?part=snippet&id=${id}`)
.then(res=>{setChannelDetail(res.items[0]);console.log(res.items[0])})
.catch(er=>console.log(er))

// vedios of channel
FetchApi(`search?part=snippet&channelId=${id}&order=date`)
.then(res=>setvedioesChannel(res?.items))
.catch(er=>console.log(er))

  },[id])

  
  return (
    <Box>
      <Box> 
        <div
          style={{
            height: '300px',
            background: 'linear-gradient(90deg, rgba(129,161,205,1) 13%, rgba(194,77,184,1) 84%)',
            zIndex: 10,
          }}
        ></div>
        {channeldetail?<ChannelCard
          vedio={channeldetail}
          marginTop={'-110px'}
        />:<Loading/>}
      </Box>
      <Box>

 {vedioesChannel? <Vedios vedios={vedioesChannel}/>:<Loading/>}

      </Box>
    </Box>
  );
  

}
