import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout,Feed,VedioDetail,ChannelDetail,SearchFeed } from './components'


const route=createBrowserRouter([{
  path:'',element:<Layout/>,children:[
    {path:'/',element:<Feed/>},
    {path:'/vedio/:id',element:<VedioDetail/>},
    {path:'/channel/:id',element:<ChannelDetail/>},
    {path:'/search/:searchTerm',element:<SearchFeed/>},

  ]
}])
function App() {


  return (
    <>
   <RouterProvider router={route}>

   </RouterProvider>

    </>
  )
}

export default App
