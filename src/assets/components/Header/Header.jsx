import React, { useRef } from 'react';
import { Link } from 'react-router-dom';  // import Link dari react-router-dom

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="w-full h-[80px] bg-[#444] leading-[80px] flex items-center">
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div className='flex items-center gap-[10px]'>
            <span className='w-[35px] h-[35px] mt-2 bg-white text-black text-[18px] font-[500]
            rounded-full flex items-center justify-center'><b>SY</b></span>

            <div className='leading-[20px]'>
              <h2 className='text-xl text-white font-[700]'>Safri Yandi</h2>
              <p className='text-white text-[14px] mb-1 font-[500]'>Portfolio</p>
            </div>
          </div>

          {/* menu */}
          <div className='menu' ref={menuRef} onClick={toggleMenu}>
            <ul className='flex items-center gap-10'>
              <li className='text-white font-[600]'><a href='#about'>About</a></li>
              <li className='text-white font-[600]'><a href='#services'>Services</a></li>
              <li className='text-white font-[600]'><a href='#portfolio'>Portfolio</a></li>
              <li className='text-white font-[600]'><a href='#contact'>Contact</a></li>
              
              {/* Tambahkan item Project menggunakan Link */}
              <li className='text-white font-[600]'>
                <Link to="/project-bucin" className="hover:underline">
                  Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
