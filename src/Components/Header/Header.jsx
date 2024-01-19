import { Link, NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                     <img src="/src/assets/images/Logo.png" alt="" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    

                    <Link to ='/'><li><a href="#">Home</a></li></Link>
                    

                    <Link to ='/donation'><li>
                        <a >Donation</a>
                    </li></Link>
                    <Link to ='/statistics'><li><a>Statistics</a></li></Link>
                
                    </ul>
                </div>
                <a className=" text-xl"><img src="/src/assets/images/Logo.png" alt="" /></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   
                <NavLink to ='/'><li>
                        <a >Home</a>
                    </li></NavLink>
                   
                    <NavLink to ='/donation'><li>
                        <a >Donation</a>
                    </li></NavLink>
                    <NavLink to ='/statistics'><li><a>Statistics</a></li>
                    </NavLink>
                    
                </ul>
                
            </div>
            
        </div>
    );
};

export default Header;