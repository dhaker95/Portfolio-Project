import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home/Home';
import Contact from './screens/Contact/Contact';
import About from './screens/About/About';
import Housing from './screens/Housing/Housing';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing" element={<Housing />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
