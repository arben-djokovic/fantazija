import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './HomeStyle/Home.css'
import { useNavigate } from 'react-router-dom'
import Storage from '../../Storage'
import Footer from '../Footer/Footer'
export default function Home() {
  let [kolaci, setKolaci] = useState([])
  let [torte, setTorte] = useState([])
  let [torteSlika, setTorteSlika] = useState([])

  useEffect(()=>{
    window.scrollTo(0, 0)
    setKolaci(Storage.kolaci)
    setTorte(Storage.torte)
    setTorteSlika(Storage.tortaSlike)
  },[])
  const navigate = useNavigate()
  return (
    <div className='home'>
        <Header />
        <div className="homeSection">
          <section className='popular'>
            <h1>Popularni Kolaci</h1>
            <div className="lista">
              {kolaci.map((kolac, i) => {
                if(i <= 3){
                  return(<div key={kolac.id} onClick={()=>{navigate('/kolac/' + kolac.id)}} className='kolac'>
                    <img src={kolac.slika} alt="Fantazija" />
                    <h3>{kolac.ime}</h3>
                    <p>{kolac.kratakOpis}</p>
                    <p className='cijena'>{kolac.cijena} $</p>
                  </div>)
                }
              })}
            </div>
            <div onClick={()=>{navigate('/kolaci')}} className="seeMore">See More</div>
          </section>
          <section className='popular'>
            <h1>Popularne Torte</h1>
            <div className="lista">
              {torte.map((torta, i) => {
                if(i <= 3){
                return(<div key={torta.id} onClick={()=>{navigate('/torta/' + torta.id)}} className='kolac'>
                  <img src={torta.slika} alt="Fantazija" />
                  <h3>{torta.ime}</h3>
                  <p>{torta.kratakOpis}</p>
                  <p className='cijena'>{torta.cijena} $</p>
                </div>)
                }
              })}
            </div>
            <div onClick={()=>{navigate('/torte')}} className="seeMore">See More</div>
          </section>
          <section className='popular'>
            <h1>Torte sa slikom</h1>
            <div className="lista">
              {torteSlika.map((torta, i) => {
                if(i <= 3){
                return(<div key={torta.id} onClick={()=>{navigate('/torta-slika/' + torta.id)}} className='kolac'>
                  <img src={torta.slika} alt="Fantazija" />
                  <h3>{torta.ime}</h3>
                  <p>{torta.kratakOpis}</p>
                  <p className='cijena'>{torta.cijena} $</p>
                </div>)
                }
              })}
            </div>
          </section>
        </div>
        <Footer />
    </div>
  )
}
