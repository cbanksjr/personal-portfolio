import calculator from "../assets/react-calculator.png";
import ProjectsComponent from "./ProjectsComponent";

const Calculator = () => {
  const calculatorRepo = "https://github.com/cbanksjr/full-stack-finance-calculator";
  const projectName = "Finance Calculator";

  return (
    <article className="col-start-2">
      <ProjectsComponent
        url2={calculatorRepo}
        image={calculator}
        name={projectName}
        tools={"React, TailwindCSS, Spring MVC, PostgreSQL"}
      />
    </article>
  );
};

export default Calculator;
