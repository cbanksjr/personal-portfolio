/**
 * eslint-disable react/no-unknown-property
 *
 * @format
 */
import ReactList from "./ReactList";
import Calculator from "./Calculator";
import BoredAPI from "./BoredAPI";

const Projects = () => {
  return (
    <section className="lg:grid grid-rows-1 grid-cols-3">
      <h1 className="text-center mb-10 lg:text-center text-2xl 2xl:text-4xl pt-36 font-semibold text-slate-50 col-start-2">Projects</h1>
      <BoredAPI />
      <ReactList />
      <Calculator />
    </section>

     

      
  );
};

export default Projects;
