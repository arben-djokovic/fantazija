import '../Kolaci/KolaciStyle/KolaciStyle.css'
import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Storage from '../../Storage'
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function Torte() {
  let [torte, setTorte] = useState([])
  const navigate = useNavigate()
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
            return (<div key={torta.id} onClick={() => { navigate('/torta/' + torta.id) }} className='kolac'>
              <img src={torta.slika} alt="Fantazija" />
              <h3>{torta.ime}</h3>
              <p>{torta.kratakOpis}</p>
              <p className='cijena'>{torta.cijena} $</p>
            </div>)
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
