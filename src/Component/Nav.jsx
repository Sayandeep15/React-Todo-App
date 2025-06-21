import React from 'react'

const Nav = () => {
  return (
    <div className='flex bg-[#05050A] w-full text-white justify-between p-2'>
        <h1 className='text-2xl '>TASKS</h1>
        <ul className='flex gap-8 pr-2 '>
            <li>Home</li>
            <li>Your Tasks</li>
        </ul>
    </div>
  )
}

export default Nav