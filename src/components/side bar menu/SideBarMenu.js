import React from 'react'
import { Link} from "react-router-dom";
import "./side-bar-menu.style.css";
export const SideBarMenu = () => {
    return (
        <div className = "side-bar-menu">
<Link to="/dashboard" className= "logo"> Admin logo</Link>
            <hr style={{ border: "1px solid white" }} />
            

            <div className="menu-list"></div>
            <ul className="menu-items">
                <li>
                    <Link className="menu-item" to="/dashboard">
                    <i className="fas fa-chart-pie"></i> Dashboard </Link>
                </li>
                <li>
                <Link className ="menu-item" to="/categories"><i className="fas fa-sitemap"></i> Categories</Link>
                </li>
                <li>  <Link className ="menu-item" to="/products"><i className="fab fa-product-hunt"></i> Products </Link></li>
                <li><Link className ="menu-item" to="/orders"><i className="fas fa-sort-amount-up-alt"></i> Orders </Link></li>
                <li><Link className ="menu-item" to="/customers"><i className="fas fa-users"></i> Customers </Link></li>
                <li><Link className ="menu-item" to="/payments"><i className="far fa-credit-card"></i> Payments </Link></li>
                <li></li>

            </ul>
        </div>

    )
}
