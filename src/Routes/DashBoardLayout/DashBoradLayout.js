import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import { AuthContext } from '../../contexts/AuthProvider';
import Footer from '../../Footer/Footer';
import useAdmin from '../../useAdmin/useAdmin';
import useSeller from '../../useSeller/useSeller';

const DashBoradLayout = () => {


    const { user } = useContext(AuthContext)

    console.log(user.email)

    const [isAdmin] = useAdmin(user?.email)

    console.log(isAdmin)

    const [isSeller] = useSeller(user?.email)

    console.log(isSeller)


    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>



                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <div>
                            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        </div>

                        {
                            isSeller &&
                            <div>
                                <li><Link to='/dashboard/addedProducts'>Add A Products</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                            </div>


                        }



                        {
                            isAdmin &&
                            <div>
                                <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                            </div>
                        }
                    </ul>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoradLayout;