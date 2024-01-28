/** @format */

import ProjectsComponent from "./ProjectsComponent";
import boredAPI from "../assets/bored-api.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

const BoredAPI = () => {
  const html = <FontAwesomeIcon icon={faHtml5} color="#dd4a25" size="2x" />;
  const css = <FontAwesomeIcon icon={faCss3} color="#244bdd" size="2x" />;
  const js = <FontAwesomeIcon icon={faJs} color="#e8d44d" size="2x" />;

  const boredAPIRepo = "https://github.com/cbanksjr/express-bored-api";
  const projectName = 'Bored API'

  return (
    <article className="col-start-1">
      <ProjectsComponent 
        url2={boredAPIRepo}
        image={boredAPI}
        name={projectName}
        fontAwesome={html}
        fontAwesome2={css}
        fontAwesome3={js}
      />
    </article>
  );
};

export default BoredAPI;
