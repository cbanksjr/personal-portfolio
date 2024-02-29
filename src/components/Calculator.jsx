import calculator from "../assets/react-calculator.png";
import ProjectsComponent from "./ProjectsComponent";

const Calculator = ({calculatorRepo, projectName, calculatorImage, technologies}) => {

  return (
    <article className="col-start-2">
      <ProjectsComponent
        url2={calculatorRepo}
        image={calculatorImage}
        name={projectName}
        tools={technologies}
      />
    </article>
  );
};

export default Calculator;
