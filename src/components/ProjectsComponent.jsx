import PropTypes from "prop-types";

const ProjectsComponent = ({ url, url2, image, name, tools }) => {
  return (
    <article className="p-12 lg:p-8 flex row-start-2 place-content-center">
      <div className="bg-white border border-gray-200 rounded-lg shadow-2xl shadow-gray-600 transition ease-in-out duration-300  hover:shadow-gray-900  dark:bg-neutral-50 dark:border-gray-700">
        <a href={url} target="_blank" rel="noreferrer">
          <img className="rounded-t-lg" src={image} alt="Project Image" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
            Tools: {tools}
          </p>
          <a
            href={url2}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 dark:bg-gray-600 dark:hover:bg-[#f66b00] dark:focus:ring-neutral-300"
          >
            Project Repository
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

ProjectsComponent.propTypes ={
  url: PropTypes.string,
  url2: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  tools: PropTypes.string
}
export default ProjectsComponent;
