import React from 'react'
import Content from '../../Content/Content'
import Sidebar from '../../Sidebar/Sidebar'

const Main = () => {
  return (
    <main className='container-fuid row'>
       <Sidebar></Sidebar>
       <Content></Content>
    </main>
  )
}

export default Main