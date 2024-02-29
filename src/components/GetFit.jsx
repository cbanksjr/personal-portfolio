// import getFit from "../assets/get-fit-cover (1).jpg"
import ProjectsComponent from "./ProjectsComponent";

const GetFit = ({getFitRepo, projectName, getFitImage, technologies}) => {
    return (
        <article className="col-start-1">
            <ProjectsComponent
                url2={getFitRepo}
                image={getFitImage}
                name={projectName}
                tools={technologies}
            />
        </article>
    );
};

export default GetFit;
