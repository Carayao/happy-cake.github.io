import Header from "./Componentes/Header.jsx";
import Home from "./Views/Home.jsx"
import Contacto from "./Views/Contacto.jsx"
import NotFound from "./Views/Not Found.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
