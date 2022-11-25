import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Footer/Footer';

const DashBoradLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoradLayout;