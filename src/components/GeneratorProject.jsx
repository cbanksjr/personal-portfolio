/* eslint-disable react/no-unknown-property */
import backgroundProject from "../assets/Screenshot 2023-11-02 at 12.04.46 PM.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";


const GeneratorProject = () => {
    const html = <FontAwesomeIcon icon={faHtml5} color="#dd4a25" size="2x" />;
    const css = <FontAwesomeIcon icon={faCss3} color="#244bdd" size="2x"/>;
    const js = <FontAwesomeIcon icon={faJs} color="#e8d44d" size="2x"/>;

    const backgroundGeneratorURL = "https://cbanksjr.github.io/backgroundGenerator/";
    const backgroundGeneratorRepo = "https://github.com/cbanksjr/backgroundGenerator";

    return (
      <article className="p-12 lg:p-8 col-start-1 row-start-2 place-content-center">
        <div className="bg-white border border-gray-200 rounded-lg shadow-2xl shadow-gray-600 transition ease-in-out duration-300  hover:shadow-gray-900  dark:bg-neutral-50 dark:border-gray-700">
          <a href={backgroundGeneratorURL} target="_blank" rel="noreferrer">
            <img
              className="rounded-t-lg"
              src={backgroundProject}
              alt="Background Generator Project"
            />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
              Background Generator
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
                {html} {css} {js}
            </p>
            <a
              href={backgroundGeneratorRepo}
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </article>
    )
}

export default GeneratorProject