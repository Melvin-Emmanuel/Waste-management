import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mobile = () => {
    const Nav = useNavigate()
  return (
    <div className='Mobile_nav'>
         <li onClick={()=>{ Nav('/')
            window.location.reload()
        }}>Home</li>
            <li onClick={()=> Nav('About')}>About</li>
            <li onClick={()=> Nav('Products')}>Products</li>
            <li ></li>
    </div>
  )
}

export default Mobile