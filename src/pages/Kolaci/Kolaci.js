import React,{useState, useEffect} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './KolaciStyle/KolaciStyle.css'
import Storage from '../../Storage'
import { useNavigate } from 'react-router-dom';

export default function Kolaci() {
    let [kolaci, setKolaci] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        window.scrollTo(0, 0)
        setKolaci(Storage.kolaci)
    },[])
  return (
    <div className='kolaci'>
        <Header />
        <div className='kolaciSection'>
            <h1>Kolaci</h1>
            <div className="lista">
              {kolaci.map(kolac => {
                return(<div key={kolac.id} onClick={()=>{navigate('/kolac/' + kolac.id)}} className='kolac'>
                  <img src={kolac.slika} alt="" />
                  <h3>{kolac.ime}</h3>
                  <p>{kolac.kratakOpis}</p>
                  <p className='cijena'>{kolac.cijena} $</p>
                </div>)
              })}
            </div>
        </div>
        <Footer />
    </div>
  )
}