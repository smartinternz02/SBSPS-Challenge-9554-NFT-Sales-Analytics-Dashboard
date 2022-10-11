import React from 'react'
import { Link,Outlet } from 'react-router-dom';
import './navbar.css';

function navbar() {
    return (
        <div className='cont'>
            
            <nav className='navbar'>
                <img src="/ibmlogo.png" alt="" className='navlogo' />
                <ul className='navul'>

              
                    
                    <li  className='navli'> <Link to="home" className="navroute"> Home </Link> </li>
                    <li  className='navli'> <Link to="explore" className="navroute"> Explore </Link> </li>
                    <li  className='navli'> <Link to="marketplace" className="navroute"> Marketplace </Link> </li>
                    <li  className='navli'> <Link to="bucket" className="navroute"> Steal Bucket </Link> </li>
                    <li  className='navli'> <Link to="mynft" className="navroute"> My NFTs </Link> </li>
                    <li  className='navli' id='dash'> <Link to="dashboard" className="navroute"><div className="dash"> <div className="dp">
                         <img src="/billidp.png"  id='dp' alt="" /></div>
                    Dashboard <svg className='down' xmlns="http://www.w3.org/2000/svg" width={"2rem"}  viewBox="0 0 24 24" fill="none" stroke="rgb(0 199 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polyline points="6 9 12 15 18 9"></polyline></svg></div>  </Link> </li>
                </ul>
            </nav>
            <Outlet/>
               
        </div>
    )
}

export default navbar
