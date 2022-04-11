import { Route, Routes, Navigate } from "react-router-dom";
import './pages/AppStyle/App.css'
import Home from './pages/Home/Home';
import Kolaci from './pages/Kolaci/Kolaci';
import Torte from './pages/Torte/Torte';
import Menu from './pages/Menu/Menu';
import Onama from './pages/Onama/Onama';
import Kolac from './pages/Kolac/Kolac';
import Torta from './pages/Torta/Torta';
import TortaSlika from './pages/TortaSlika/TortaSlika';

export default function App() {
  return (<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/kolaci" element={<Kolaci />} />
    <Route path="/torte" element={<Torte />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/o-nama" element={<Onama />} />
    <Route path="/kolac/:id" element={<Kolac />} />
    <Route path="/torta/:id" element={<Torta />} />
    <Route path="/torta-slika/:id" element={<TortaSlika />} />
    <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
  );
}