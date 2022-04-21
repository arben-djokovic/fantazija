import React,{useState, useEffect} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './KolaciStyle/KolaciStyle.css'
import Storage from '../../Storage'
import {Helmet} from "react-helmet";
import Card from '../../components/Card'

export default function Kolaci() {
    let [kolaci, setKolaci] = useState([])
    useEffect(()=>{
        window.scrollTo(0, 0)
        setKolaci(Storage.kolaci)
    },[])
  return (
    <div className='kolaci'>
    <Helmet>
      <title>Fantazija - kolaci</title>
      <meta name="description" content="Fantazija svi kolaci na raspolaganju. Fantazija - Tuzi" />
    </Helmet>
        <Header />
        <div className='kolaciSection'>
            <h1>Kolaci</h1>
            <div className="lista">
              {kolaci.map(kolac => {
                return(<Card key={kolac.id} tortaId={kolac.id} tortaSlika={kolac.slika} tortaIme={kolac.ime} tortaKratakOpis={kolac.kratakOpis} tortaCijena={kolac.cijena} />)
              })}
            </div>
        </div>
        <Footer />
    </div>
  )
}
