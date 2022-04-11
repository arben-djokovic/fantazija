import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Storage from '../../Storage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './KolacStyle/KolacStyle.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Helmet} from "react-helmet";


// import required modules
import { Pagination, Navigation } from "swiper";

export default function Kolac() {
    let params = useParams()
    let [kolac, setKolac] = useState({})
    useEffect(()=>{
        window.scrollTo(0, 0)
        Storage.kolaci.map(kolac =>{
            if(kolac.id == params.id){
                setKolac(kolac)
            }
        })
    },[])
  return (
    <div className='kolac'>
    <Helmet>
      <title>{"Fantazija - kolac -" + kolac.ime}</title>
      <meta name="description" content={"Fantazija kolac - " + kolac.ime + ". Fantazija - Tuzi"} />
      <link rel="shortcut icon" href="../../assets/logo.png" type="image/x-icon" />
    </Helmet>
        <Header />
        <div className="kolacSection">
            <h1>Kolac: {kolac.ime}</h1>
            <div className="kolacInfos">
                <div className="image-swiper">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='slikaKolaca' src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className='slikaKolaca' src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className='slikaKolaca' src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className='slikaKolaca' src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className='slikaKolaca' src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                </Swiper>
                </div>
                <div className="aboutKolac">
                    <h2>{kolac.ime}</h2>
                    <p>{kolac.opis}</p>
                    <p className='cijena'>cijena: <span>{kolac.cijena}$</span></p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
