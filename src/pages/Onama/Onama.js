import React,{useEffect} from 'react'
import Header from '../Header/Header'
import Footer from './../Footer/Footer';
import './OnamaStyle/OnamaStyle.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function Onama() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
const iconPerson = new L.Icon({
    iconUrl: require('../../assets/marker-icon1.png'),
    iconRetinaUrl: require('../../assets/marker-icon1.png'),
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [34,54],
    iconAnchor: [17, 54],
});
  return (
    <div className='onama'>
        <Header />
        <div className="onamaSection">
            <h1>O nama</h1>
            <section>
                <div>
                    <a className='linkMaps' target='_blank' href='https://www.google.com/maps/place/Fantazia/@42.3613129,19.3303067,18.92z/data=!4m12!1m6!3m5!1s0x0:0x4e54ef6bfa1848fb!2sFantazija!8m2!3d46.203634!4d16.1777544!3m4!1s0x0:0xf174d3fc70cb2cfd!8m2!3d42.3612158!4d19.329877?hl=en'>Google Maps <i class="fa fa-external-link" aria-hidden="true"></i></a>
                    <MapContainer center={[42.361215, 19.329853]} zoom={15}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker icon={iconPerson} position={[42.361215, 19.329853]}>
                            <Popup>
                                Fantazija
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className="aboutUs">
                    <h1>Fantazija</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi officiis aliquid animi fugit blanditiis libero quidem. Totam itaque corrupti temporibus alias consequatur recusandae, amet a ad illum, expedita rerum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex voluptates eveniet maxime? Repellat blanditiis, praesentium laboriosam pariatur tempora ut iure, quidem voluptate maxime esse mollitia a laudantium illum quisquam?</p>
                </div>
            </section>
        </div>
        <Footer />
    </div>
  )
}
