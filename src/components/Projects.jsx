import GetFit from "./GetFit.jsx";
import Calculator from "./Calculator";

const Projects = () => {
  return (
    <section className="lg:grid grid-rows-1 grid-cols-2">
        <h1 className="col-start-1 col-end-3 mb-10 text-center text-xl lg:text-2xl 2xl:text-4xl pt-36 font-semibold text-slate-50">Projects</h1>
      <GetFit 
        getFitRepo = "https://github.com/cbanksjr/get-fit"
        projectName = "Get Fit Exercise App"
        getFitImage = "src/assets/get-fit-cover (1).jpg"
        technologies = "React, TailwindCSS, Spring, PostgreSQL"
      />
      <Calculator 
        calculatorRepo = "https://github.com/cbanksjr/full-stack-finance-calculator"
        projectName = "Finance Calculator"
        calculatorImage = "src/assets/react-calculator.png"
        technologies = "React, TailwindCSS, ExpressJS, PostgreSQL"
      />
    </section>

     

      
  );
};

export default Projects;
