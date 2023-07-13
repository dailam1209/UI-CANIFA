import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function ItermSidebar ({to, title, icon, active, isUse, onClick}) {
    const handleClose = () => {
        if(window.innerWidth < 900) {
            document.querySelector('.profile').style.display = 'none';
        }
    }

    
    return  (
        <div className="hover">

        <NavLink to={to} className={({ isActive }) => (isActive && isUse ? 'active-sidebar-profile iterm' : 'inactive iterm')}  onClick={() => handleClose()}>
            <span className="icon-sidebar">{icon}</span>
            <span className="active-icon">{active}</span>
            <span className="title-sidebar">{title}</span>
        </NavLink>
        </div>
    )
}

export default ItermSidebar;