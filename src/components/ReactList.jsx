/**
 * eslint-disable react/no-unknown-property
 *
 * @format
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import reactList from "../assets/ReactList2.png";
import ProjectsComponent from "./ProjectsComponent";

const ReactList = () => {
  const react = <FontAwesomeIcon icon={faReact} color="#03d1f6" size="2x" />;
  const reactListURL = "https://cbanksjr.github.io/react-personlist/";
  const reactListRepo = "https://github.com/cbanksjr/react-personlist";
  const projectName = "React List";

  return (
    <article className="col-start-2">
    <ProjectsComponent
      url={reactListURL}
      url2={reactListRepo}
      image={reactList}
      name={projectName}
      fontAwesome={react}
    />
    </article>
  );
};

export default ReactList;
