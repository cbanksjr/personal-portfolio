/* eslint-disable react/no-unknown-property */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import calculator from "../assets/react-calculator.png"

const Calculator = () => {
    const react = <FontAwesomeIcon icon={faReact} color="#03d1f6" size="2x" />;
    const calculatorURL = "https://cbanksjr.github.io/react-finance-calculator/";
    const calculatorRepo = "https://github.com/cbanksjr/react-finance-calculator";

    return (
        <article className="p-12 lg:p-8 flex col-start-3 row-start-2 place-content-center">
        <div className="bg-white border border-gray-200 rounded-lg shadow-2xl shadow-gray-600 transition ease-in-out duration-300  hover:shadow-gray-900  dark:bg-neutral-50 dark:border-gray-700">
          <a href={calculatorURL} target="_blank" rel="noreferrer">
            <img
              className="rounded-t-lg"
              src={calculator}
              alt="Calculator Project"
            />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
              Finance Calculator
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
              {react}
            </p>
            <a
              href={calculatorRepo}
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

export default Calculator