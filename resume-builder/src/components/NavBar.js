import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar(){
    return (
        <div>
            <NavLink to='/signin'>
                Sign In
            </NavLink>
        </div>
    )
}

export default NavBar;