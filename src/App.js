import { Route, Routes } from "react-router-dom";
import './pages/AppStyle/App.css'
import Home from './pages/Home/Home';

export default function App() {
  return (<Routes>
    <Route path="/*" element={<Home />} />
  </Routes>
  );
}