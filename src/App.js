import { Route, Routes } from "react-router-dom";
import './pages/AppStyle/App.css'
import Home from './pages/Home/Home';
import Kolaci from './pages/Kolaci/Kolaci';
import Torte from './pages/Torte/Torte';
import Menu from './pages/Menu/Menu';
import Onama from './pages/Onama/Onama';

export default function App() {
  return (<Routes>
    <Route path="/*" element={<Home />} />
    <Route path="/kolaci" element={<Kolaci />} />
    <Route path="/torte" element={<Torte />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/o-nama" element={<Onama />} />
  </Routes>
  );
}