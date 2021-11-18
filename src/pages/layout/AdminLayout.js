import React from 'react'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const AdminLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}

            <Footer/>
        </div>
    )
}

export default AdminLayout
