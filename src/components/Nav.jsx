/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const Nav = ({ link1, link2 }) => {
  const gitHub = <FontAwesomeIcon icon={faGithub} size="2xl" />;
  const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="2xl" />;
  
  return (
   
      <nav className="lg:flex justify-end p-8">
        <ul className="flex flex-row justify-center lg:flex mt-4 text-xl">
          <li className="pr-2 lg:mr-20 cursor-pointer text-white hover:text-[#f66b00] duration-300 hover:duration-500"><a href={link1}>{linkedIn}</a></li>
          <li className="pl-2 lg:mr-36 text-white hover:text-[#f66b00] duration-500 hover:duration-300"><a href={link2}>{gitHub}</a></li>
        </ul>
      </nav>
  
  );
};
Nav.propTypes = {
  link1: PropTypes.string,
  link2: PropTypes.string
};


export default Nav;
