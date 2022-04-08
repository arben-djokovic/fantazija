import React from 'react'
import './HeaderStyle/Header.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
  return (
    <div className='header'>
        <img onClick={()=>{navigate('/')}} className='logo' src={logo} alt="Fantazija" />
        <ul>
            <li onClick={()=>{navigate('/torte')}}>Torte</li>
            <li>|</li>
            <li onClick={()=>{navigate('/kolaci')}}>Kolaci</li>
            <li>|</li>
            <li onClick={()=>{navigate('/ostalo')}}>Ostalo</li>
        </ul>
    </div>
  )
}
