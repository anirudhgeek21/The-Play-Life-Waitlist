import React from 'react';
import Logo from './tpl_logo_bgrem.png'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black via-black to-[#404142] p-4 md:p-8 pl-0">
      <div className="container w-[90%] mx-auto flex items-center justify-between md:justify-between">
        
        <div className="flex items-center">
          <img className="md:w-32 md:h-32 w-10 h-10 mr-2" src={Logo} alt="Logo" />
          
        </div>

        
        <div className="text-white font-bold text-3xl md:text-8xl ml-5 md:ml-0 tracking-widest">Join Waitlist</div>

        
        <div className="flex items-center">
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
