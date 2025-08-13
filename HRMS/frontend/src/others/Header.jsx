import React from 'react'

export const Header = (props) => {
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('');
  }
  return (
    <div id='header-navbar' className='flex items-end justify-between '>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-medium'>{props.data?.firstname || 'Admin'} 👋</span> </h1>
        <button onClick={logOutUser} className='bg-blue-500 text-lg font-medium px-5 py-2 rounded-2xl'>Log Out</button>
    </div>
  )
}

