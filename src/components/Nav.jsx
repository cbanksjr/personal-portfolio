/* eslint-disable react/prop-types */
/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  const gitHub = <FontAwesomeIcon icon={faGithub} size="2xl" />;
  const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="2xl" />;
  
  return (
      <nav className="lg:flex justify-end p-8">
        <ul className="flex flex-row justify-center lg:flex mt-4 text-xl">
          <li className="pr-2 lg:mr-20 cursor-pointer text-white hover:text-[#f66b00] duration-300 hover:duration-500"><a href="https://www.linkedin.com/in/craig-banks-jr-7a9126106/" target="_blank" rel="noreferrer">{linkedIn}</a></li>
          <li className="pl-2 lg:mr-36 text-white hover:text-[#f66b00] duration-500 hover:duration-300"><a href="https://github.com/cbanksjr" target="_blank" rel="noreferrer">{gitHub}</a></li>
        </ul>
      </nav>
  
  );
};



export default Nav;
