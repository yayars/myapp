//import { Link } from "react-router"
import { NavLink } from 'react-router';
import { Heart } from 'lucide-react';

function linkClass({ isActive }) {
    return isActive ? "border-b-2 border-red-500" : "text-blue-500 houver: text-yellow-500"
}



function Header() {
    return (

        <header className="bg-gray-800 text-gray-400 py-6 text-center text-z space-x-5">

            <h1>
                MyApp
                <Heart className="inline fill-blue-50 stroke-blue-200 stroke-2 " /> </h1>

            <NavLink to="/" className={linkClass}>Inicio</NavLink>
            <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
            <NavLink to="/contato" className={linkClass}>Contato</NavLink>

        </header>
    )
}

export default Header