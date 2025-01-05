import React from 'react'
import { Box, Stack } from '@mui/material'
import {VedioCard,ChannelCard} from './'

export default function Vedios({vedios,direction}) {
  return <>
<Stack direction={direction||'row'} flexWrap={'wrap'} gap={2} justifyContent={'center'}>

{vedios?.filter((vedio) => !vedio.id.playlistId) 
          .map((vedio, index) => (
            <Box key={index}>
              {vedio?.id?.videoId && <VedioCard vedio={vedio} />}
              {vedio.id.channelId && <ChannelCard vedio={vedio} />}
            </Box>
          ))}
</Stack>
  </>
}
