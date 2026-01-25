import { Routes, Route} from "react-router-dom";
import {Home} from "../pages/Home/Home";
import {About} from "../pages/About/About";
import {Skills} from "../pages/Skills/Skills";
import {Projects} from "../pages/Projects/Projects";
import {Contact} from "../pages/Contact/Contact";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<About />} />
            <Route path="/Habilidades" element={<Skills />} />
            <Route path="/Projetos" element={<Projects />} />
            <Route path="/Contato" element={<Contact />} />
        </Routes>        
    );
}