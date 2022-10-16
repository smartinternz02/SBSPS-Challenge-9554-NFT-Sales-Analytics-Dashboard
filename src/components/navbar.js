import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';
import './navbar.css';

function navbar() {
    return (
        <div className='cont'>
            
            <nav className='navbar'>
            <li className='navli'> <NavLink to="home"  className="navroute"><img src="/ibmlogo.png" alt="" className='navlogo' />  </NavLink> </li>
                
                <ul className='navul'>

              
                    
                    <li className='navli'> <NavLink to="home"  className="navroute"> Home </NavLink> </li>
                    <li className='navli'> <NavLink to="explore"  className="navroute"> Explore </NavLink> </li>
                    <li className='navli'> <NavLink to="marketplace"  className="navroute"> Marketplace </NavLink> </li>
                    <li className='navli'> <NavLink to="analytic"  className="navroute"> Analytics </NavLink> </li>
                    <li className='navli'> <NavLink to="mynft"  className="navroute"> My NFTs </NavLink> </li>
                    <li className='navli' id='dash'> <NavLink to="dashboard"  className="navroute"><div className="dash"> <div className="dp">
                         <img src="/defaultdp.jpg"  id='dp' alt="" /></div>
                    Dashboard <svg className='down' xmlns="http://www.w3.org/2000/svg" width={"2rem"}  viewBox="0 0 24 24" fill="none" stroke="rgb(0 199 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polyline points="6 9 12 15 18 9"></polyline></svg></div>  </NavLink> </li>
                </ul>
            </nav>
            <Outlet/>
               
        </div>
    )
}

export default navbar
