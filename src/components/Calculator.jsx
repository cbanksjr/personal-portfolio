/**
 * eslint-disable react/no-unknown-property
 *
 * @format
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import calculator from "../assets/react-calculator.png";
import ProjectsComponent from "./ProjectsComponent";

const Calculator = () => {
  const react = <FontAwesomeIcon icon={faReact} color="#03d1f6" size="2x" />;
  const calculatorURL = "https://cbanksjr.github.io/react-finance-calculator/";
  const calculatorRepo = "https://github.com/cbanksjr/react-finance-calculator";
  const projectName = "Calculator";

  return (
    <article className="col-start-3">
      <ProjectsComponent
        url={calculatorURL}
        url2={calculatorRepo}
        image={calculator}
        name={projectName}
        fontAwesome={react}
      />
    </article>
  );
};

export default Calculator;
