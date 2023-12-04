import Logo from "../assets/R.png";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  // State variables
  const [showShadowNav, setShowShadowNav] = useState(false); // Controls the visibility of the shadow on the navbar

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowShadowNav(true);
      } else {
        setShowShadowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        !showShadowNav
          ? "fixed w-full h-[80px] flex justify-between items-center px-4"
          : "fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 z-20 shadow-2xl"
      }
    >
      <div>
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "5rem", marginLeft: "1rem", marginRight: "1rem" }}
          />
        </Link>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA] text-white">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA] text-white">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA] text-white">
          <Link to="skill" smooth={true} duration={500}>
            Skill
          </Link>
        </li>
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA] text-white">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA] text-white">
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA] text-white">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col left-0 top-[35%]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              href="https://www.linkedin.com/in/rohan-sharma-937283167/"
              className="flex justify-between items-center w-full text-[#3A1078]"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
