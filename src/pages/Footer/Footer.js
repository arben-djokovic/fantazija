import React from 'react'
import './FooterStyle/FooterStyle.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate()
  return (
    <div className='footer'>
        <section>
            <img onClick={()=>{navigate('/')}} src={logo} alt="" />
            <p>2022 © All right reserved</p>
        </section>
        <section>
            <h2>Pages</h2>
            <ul>
                <li onClick={()=>{navigate('/')}}>Home</li>
                <li onClick={()=>{navigate('/torte')}}>Torte</li>
                <li onClick={()=>{navigate('/kolaci')}}>Kolaci</li>
                <li onClick={()=>{navigate('/ostalo')}}>Ostalo</li>
            </ul>
        </section>
        <section>
            <h2>Conact us:</h2>
            <ul>
                <li><a href='tel:+38269405596'><i class="fa fa-phone" aria-hidden="true"></i> +38269405596</a></li>
                <li><a target="_blank" href='https://www.instagram.com/fantazija20/'><i class="fa fa-instagram" aria-hidden="true"></i> fantazija20</a></li>
            </ul>
        </section>
    </div>
  )
}
