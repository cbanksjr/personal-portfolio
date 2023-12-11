/**
 * eslint-disable react/no-unknown-property
 *
 * @format
 */
import GeneratorProject from "./GeneratorProject";
import ReactList from "./ReactList";
import Calculator from "./Calculator";

const Projects = () => {
  return (
    <section className="lg:grid grid-rows-3 grid-cols-3">
      <h1 className="text-center mb-20 lg:text-center text-3xl pt-60 font-semibold text-slate-50 col-start-2">Projects</h1>
      <GeneratorProject />
      <ReactList />
      <Calculator />
    </section>

     

      
  );
};

export default Projects;
