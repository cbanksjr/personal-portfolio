/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";

const Icons = () => {

  const htmlIcon = <FontAwesomeIcon icon={faHtml5} size="3x" color="#dd4a25" />;
  const cssIcon = <FontAwesomeIcon icon={faCss3} size="3x" color="#244bdd"/>;
  const jsIcon = <FontAwesomeIcon icon={faJs} size="3x" color="#e8d44d" />;
  const reactIcon = <FontAwesomeIcon icon={faReact} size="3x" color="#03d1f6"/>
  const javaIcon = <FontAwesomeIcon icon={faJava} size="3x" color="#1d8dca"/>;
  return (
    <ul className="grid grid-cols-5 gap-6 lg:flex items-center">
      <li className="pr-8">{htmlIcon}</li>
      <li className="pr-8">{cssIcon}</li>
      <li className="pr-8">{jsIcon}</li>
      <li className="pr-8">{reactIcon}</li>
      <li className="pr-8">{javaIcon}</li>
    </ul>
  );
};

export default Icons;