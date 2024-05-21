import { useState } from "react";

import { iconClose, iconHamburger, logo } from "../images/insurance";

const NavResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow md:flex md:justify-between md:items-center w-full font-karla">
      <div className="flex justify-between items-center py-5 z-40">
        <span className="cursor-pointer">
          <img src={logo.src} className="ms-5 h-5 inline" alt="main logo" />
        </span>
        <span
          className="cursor-pointer md:hidden block me-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={isOpen ? iconClose.src : iconHamburger.src}
            alt="open menu"
            id="hamburgerBtn"
            className="bg-[iconHamburger]"
          />
        </span>
      </div>
      <div
        className={`bg-[#2b272f] md:bg-transparent w-full h-[94vh] md:h-10 absolute top-[-96vh] md:static bg-no-repeat bg-bottom bg-contain bg-insurance-nav transition-all z-30 ${isOpen && "top-[6rem]"}`}
      >
        <ul className="ff-karla text-white font-semibold tracking-widest flex flex-col gap-6 text-center pt-9 md:text-[#837d87] md:flex-row items-center md:gap-5 md:pt-0 md:justify-end">
          <li>
            <a href="#">HOW WE WORK</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">ACCOUNT</a>
          </li>
          <a href="#">
            <button className="md:text-slate-950 border-2 md:border-slate-950 px-24 py-2 md:px-5 md:me-4">
              VIEW PLANS
            </button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavResponsive;
