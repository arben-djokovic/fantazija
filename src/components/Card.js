import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Card({tortaId, tortaSlika, tortaIme, tortaKratakOpis, tortaCijena}) {
    const navigate = useNavigate()

    return (<div onClick={() => { navigate('/torta/' + tortaId) }} className='kolac'>
        <img src={tortaSlika} alt="Fantazija" />
        <h3>{tortaIme}</h3>
        <p>{tortaKratakOpis}</p>
        <p className='cijena'>{tortaCijena} $</p>
    </div>)
}
