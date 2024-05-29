import React, { useState } from 'react';
import logo from '../../../Images/CropLogo.png';
import menu from '../../../Images/Menu.jpg';
import '../../style/Hero.css'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding flex  z-50 w-[100%] set-bg justify-between items-center">
     <div className=' font-inter font-semibold text-white'>
        <a href="">
    <img src={logo} alt="" height={"100px"} width={"200px"} className=' object-cover' />
     </a> 
     </div>
     <div className=' text-white'>
       2234
     </div>
    </header>
  );
};

export default Header;
