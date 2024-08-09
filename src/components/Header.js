import React from 'react';
import Logo from "../assets/image-removebg-preview.png";

const Header = () => {
  return (
      <div className="rounded-md shadow-md w-[90vw] h-[10vh] flex flex-row justify-between py-3 px-5 bg-gray-100 text-black mt-2">
          <div >
              <img src={Logo} className='w-20 bg-black' alt='logo-pic'/>
          </div>
          <div className=' text-black mt-2 font-bold'>Security analysis app</div>
    </div>
  )
}

export default Header