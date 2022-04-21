import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './HomeStyle/Home.css'
import { useNavigate } from 'react-router-dom'
import Storage from '../../Storage'
import Footer from '../Footer/Footer'
import Card from '../../components/Card'
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
                  return(<Card key={kolac.id} tortaId={kolac.id} tortaSlika={kolac.slika} tortaIme={kolac.ime} tortaKratakOpis={kolac.kratakOpis} tortaCijena={kolac.cijena} />)
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
                  return(<Card key={torta.id} tortaId={torta.id} tortaSlika={torta.slika} tortaIme={torta.ime} tortaKratakOpis={torta.kratakOpis} tortaCijena={torta.cijena} />)
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
                  return(<Card key={torta.id} tortaId={torta.id} tortaSlika={torta.slika} tortaIme={torta.ime} tortaKratakOpis={torta.kratakOpis} tortaCijena={torta.cijena} />)
                }
              })}
            </div>
          </section>
        </div>
        <Footer />
    </div>
  )
}
