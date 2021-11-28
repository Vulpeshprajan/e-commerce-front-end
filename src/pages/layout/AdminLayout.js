import React from 'react'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { SideBarMenu } from '../../components/side bar menu/SideBarMenu';
import "./admin-layout.style.css";
const AdminLayout = ({children}) => {
    return (
        <div className= "admin-layout">
            <div className="left bg-dark ">
                <SideBarMenu />
            </div>
            <div className="right">
            <Header/>
            
                <div className="main">
                {children}
                </div>
                <Footer />
                </div>
        </div>
    )
}

export default AdminLayout
