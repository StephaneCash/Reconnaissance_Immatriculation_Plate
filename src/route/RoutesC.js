import { Routes, BrowserRouter, Route } from "react-router-dom";
import Reconnaissance from "../view/Reconnaissance";
import Connexion from '../view/Connexion'
import Home from "../view/Home";

function RoutesC() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Connexion />} />
                <Route path="/reconnaissance" element={<Reconnaissance />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesC