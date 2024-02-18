import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [showNavItems, setShowNavItems] = useState(false);
 const [dropDown, setDropDown]= useState(false)

  const options = [
    {
        id:1, name:"Vegetables", link:"/#"
    },
    {
        id:2, name:"Fruits", link:"/#"
    },
    {
        id:3, name:"Grains", link:"/#"
    },
  ];

  return (
    <div className="bg-white shadow-md ">
      <nav className="flex justify-between items-center container py-4 relative">
        <div className="nav-heading text-xl sm:text-3xl font-bold">Logo</div>
        <div className="sm:hidden">
          <RxHamburgerMenu onClick={() => setShowNavItems(!showNavItems)} />
        </div>
        <div
          className={`max-sm:absolute max-sm:right-0 max-sm:top-[3.8rem] max-sm:w-full max-sm:text-center max-sm:p-2 max-sm:flex-col ${
            showNavItems
              ? "max-sm:translate-x-0 max-sm:opacity-90"
              : "max-sm:translate-x-40 max-sm:opacity-0"
          } max-sm:bg-white max-sm:rounded-b-lg max-sm:transition-translate max-sm:duration-300 nav-menu flex items-center sm:text-lg font-semibold gap-4 text-slate-600`}
        >
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <div className="sm:relative">
            <div className="flex justify-center gap-1 items-center">
                <p>DropDown</p>
                <div className="text-2xl cursor-pointer" onClick={()=>setDropDown(!dropDown)}>
                    <IoMdArrowDropdown />
                </div>
            </div>
            <div className="sm:absolute bg-white pt-2 sm:pt-4 rounded-b-md">
            {
                dropDown &&
                options.map((option)=>(
                    <div className="hover:bg-rose-200 py-1 px-4" key={option.id}>{option.name}</div>
                ))
            }
            </div>
          </div>
          <button className="bg-teal-600 text-white py-1 px-4 hover:bg-teal-500 hover:scale-105 transition-all duration-200">My Account</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
