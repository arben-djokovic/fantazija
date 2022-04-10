import '../Kolaci/KolaciStyle/KolaciStyle.css'
import React,{useState, useEffect} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Storage from '../../Storage'
import { useNavigate } from 'react-router-dom';

export default function Torte() {
    let [torte, setTorte] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        window.scrollTo(0, 0)
        setTorte(Storage.torte)
    },[])
  return (
    <div className='kolaci'>
        <Header />
        <div className='kolaciSection'>
            <h1>Torte</h1>
            <div className="lista">
              {torte.map(kolac => {
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
