import React,{useRef, useState} from 'react'
import './HeaderStyle/Header.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigation = useRef()
    const navigate = useNavigate()
    let [headerOpen, setHeaderOpen] = useState(false)
    let toggleNav = () => {
        if(window.innerWidth < 601){
            if(headerOpen){
                navigation.current.classList.toggle("openHeader");
                setTimeout(() => {
                    navigation.current.style.display = "none";
                    setHeaderOpen(false)
                }, 400);
            }
            else{
                navigation.current.style.display = "flex";
                setTimeout(() => {
                    navigation.current.classList.toggle("openHeader");
                    setHeaderOpen(true)
                }, 10);
            }
        }
    }
  return (
    <div className='header'>
        <img onClick={()=>{navigate('/')}} className='logo' src={logo} alt="Fantazija" />
        <ul ref={navigation}>
            <li className='phone' onClick={()=>{navigate('/');toggleNav()}}><img src={logo} alt="Fantazija" /></li>
            <li className='linija phone'>|</li>
            <li onClick={()=>{navigate('/torte');toggleNav()}}>Torte</li>
            <li className='linija'>|</li>
            <li onClick={()=>{navigate('/kolaci');toggleNav()}}>Kolaci</li>
            <li className='linija'>|</li>
            {/* <li onClick={()=>{navigate('/ostalo');toggleNav()}}>Ostalo</li>
            <li className='linija'>|</li> */}
            <li onClick={()=>{navigate('/menu');toggleNav()}}>Menu</li>
            <li className='linija'>|</li>
            <li onClick={()=>{navigate('/o-nama');toggleNav()}}>O nama</li>
        </ul>
        <div className="openNav">
            {headerOpen ? <i onClick={toggleNav} className="fa fa-times" aria-hidden="true"></i> : <i onClick={toggleNav} className="fa fa-bars" aria-hidden="true"></i>}
        </div>
    </div>
  )
}
