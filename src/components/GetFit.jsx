import getFit from "../assets/get-fit-cover (1).jpg"
import ProjectsComponent from "./ProjectsComponent";

const GetFit = () => {
    const getFitRepo = "https://github.com/cbanksjr/get-fit";
    const projectName = "Get Fit Exercise App";

    return (
        <article className="col-start-1">
            <ProjectsComponent
                url2={getFitRepo}
                image={getFit}
                name={projectName}
                tools={"React, TailwindCSS, Spring MVC, PostgreSQL"}
            />
        </article>
    );
};

export default GetFit;
