import React from 'react'
import Button from '../Button/Button'

const Sidebar = () => {
  return (
    <aside className='col-md-2'>
      <section className="list-group">
        <Button btnRawClasses='list-group-item'>Home</Button>
        <Button btnRawClasses='list-group-item'>User</Button>
        <Button btnRawClasses='list-group-item'>Approval</Button>
        <Button btnRawClasses='list-group-item'>Waiting</Button>
        <Button btnRawClasses='list-group-item'>Test</Button>
        <Button btnRawClasses='list-group-item'>Test1</Button>
      </section>
    </aside>
  )
}

export default Sidebar