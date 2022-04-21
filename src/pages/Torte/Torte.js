import '../Kolaci/KolaciStyle/KolaciStyle.css'
import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Storage from '../../Storage'
import { Helmet } from "react-helmet";
import Card from '../../components/Card'

export default function Torte() {
  let [torte, setTorte] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
    setTorte(Storage.torte)
  }, [])
  return (
    <div className='kolaci'>
      <Helmet>
        <title>Fantazija - torte</title>
        <meta name="description" content="Fantazija sve torte na raspolaganju. Fantazija - Tuzi" />
      </Helmet>
      <Header />
      <div className='kolaciSection'>
        <h1>Torte</h1>
        <div className="lista">
          {torte.map(torta => {
            return(<Card key={torta.id} tortaId={torta.id} tortaSlika={torta.slika} tortaIme={torta.ime} tortaKratakOpis={torta.kratakOpis} tortaCijena={torta.cijena} />)
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
