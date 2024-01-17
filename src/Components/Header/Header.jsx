

const Header = () => {
    return (
        <div className="navbar bg-base-100 max-width-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <img src="/src/assets/images/Logo.png" alt="" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#">Home</a></li>
                    <li>
                        <a >Donation</a>
                    </li>
                    <li><a>Statistics</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src="/src/assets/images/Logo.png" alt="" /></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#" className="text-red-600 font-semibold underline underline-offset-1">Home</a></li>
                    <li>
                        <a >Donation</a>
                    </li>
                    <li><a>Statistics</a></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Header;