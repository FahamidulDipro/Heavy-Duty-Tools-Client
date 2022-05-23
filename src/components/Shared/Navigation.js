import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  signOut } from 'firebase/auth';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Utilities/Loading';

const Navigation = () => {
  const [user,loading]  = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignout = ()=>{
    signOut(auth);
    navigate('/login');
  }
  const navItems = <>   <li><Link to="/" className='font-bold'>Home</Link></li>
  <li tabIndex="0">
    <Link to="/about" className="justify-between font-bold">
   About
  
    </Link>
  
  </li>
  <li><Link to="/blog" className='font-bold'>Blog</Link></li>
  <li><Link to="/dashboard" className='font-bold'>Dashboard</Link></li>
   <div className='lg:hidden'>{
     user?<span className='flex items-center'><div className="avatar online">
     <div className="w-12 rounded-full">
       <img src={user?.photoURL} alt="userImage" />
     </div>
   </div><span><b className='mx-5'> {user?.displayName}</b></span><button className='btn btn-sm mx-5' onClick={handleSignout}>Logout</button></span>:<span>  <Link to="/login" className="btn btn-sm mx-5" >Login</Link>
     <Link to="/signup" className="btn btn-sm" >Signup</Link></span>}</div>
           

          
          </>
  
   
    return (
        <div className="navbar  bg-primary sticky top-0 z-50">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-screen">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">Heavy Duty Tools</Link>
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal p-0 ">
          {navItems}
          </ul>
        </div>
        <div className="navbar-end lg:visible md:visible sm:invisible invisible">
          {
            console.log(user)
          }
          {
            user?<span className='flex items-center'><div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={user?.photoURL} alt="userImage" />
            </div>
          </div><span><b className='mx-5'> {user?.displayName}</b></span><button className='btn btn-sm mx-5' onClick={handleSignout}>Logout</button></span>:<span>  <Link to="/login" className="btn btn-sm mx-5" >Login</Link>
            <Link to="/signup" className="btn btn-sm" >Signup</Link></span>
          }
        
        </div>
      </div>
    );
};

export default Navigation;