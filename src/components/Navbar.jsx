import { NavLink } from "react-router-dom";

export default function Navbar(){

    return (
        <div>
            <nav className="nav">
               <ul className="menu" >
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
               </ul>
            </nav>
        </div>
    )
}