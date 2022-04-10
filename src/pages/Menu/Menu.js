import React, {useEffect} from 'react'
import Footer from '../Footer/Footer';
import Header from './../Header/Header';
import './MenuStyle/MenuStyle.css'

export default function Menu() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <div className='menu'>
        <Header />
        <div className="menuSection">
            <h1>Nas menu:</h1>
            <div className="menuList">
                <div className="kolaci">
                    <h2>Kolaci</h2>
                    <ul>
                        <li>Rafaelo........... 2$</li>
                        <li>Rafaelo........... 2$</li>
                        <li>Rafaelo........... 2$</li>
                        <li>Rafaelo........... 2$</li>
                        <li>Rafaelo........... 2$</li>
                        <li>Rafaelo........... 2$</li>
                    </ul>
                </div>
                <div className="torte">
                    <h2>Torte</h2>
                    <ul>
                        <li>Jaffa torta........... 2$</li>
                        <li>Jaffa torta........... 2$</li>
                        <li>Jaffa torta........... 2$</li>
                        <li>Jaffa torta........... 2$</li>
                        <li>Jaffa torta........... 2$</li>
                        <li>Jaffa torta........... 2$</li>
                    </ul>
                </div>
                <div className="sokovi">
                    <h2>Sokovi</h2>
                    <ul>
                        <li>Makijato........... 2$</li>
                        <li>Makijato........... 2$</li>
                        <li>Makijato........... 2$</li>
                        <li>Makijato........... 2$</li>
                        <li>Makijato........... 2$</li>
                        <li>Makijato........... 2$</li>
                    </ul>
                </div>
                <div className="sladoledi">
                    <h2>Sladoledi</h2>
                    <ul>
                        <li>Sladoled Classic Kornet........... 1$</li>
                        <li>Sladoled Casica........................ 1$</li>
                        <li>Sladoled Veliki Kornet............. 2$</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
