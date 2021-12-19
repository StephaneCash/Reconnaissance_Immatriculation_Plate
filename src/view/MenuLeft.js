import "../css/MenuLeft.css";
import {Link, NavLink} from "react-router-dom";

function MenuLeft() {
    return (
        <div className="menuLeft">
            <div className="vertical-menu">
                <NavLink to="/home" > <i className="fa fa-address-book"></i> Home</NavLink>
                <NavLink to="/reconnaissance"><i className="fa fa-user-secret"></i>Reconnaissance</NavLink>
                <NavLink to="/config"> <i className="fa fa-gear"></i> Configuration</NavLink>
                <NavLink to="/"><i className="fa fa-sign-out"></i> Déconnection</NavLink>
            </div>
        </div>
    )
}

export default MenuLeft;