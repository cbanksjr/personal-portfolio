/* eslint-disable react/prop-types */


const Footer = () => {
    const currentYear = new Date().getFullYear()
    const copyright = String.fromCodePoint(169)

    return (
        <footer>
          <h4 className="bg-black p-10 text-white font-semibold mt-20 text-center">Copyright {copyright} {currentYear} Craig Banks Jr</h4>
        </footer>
    )
}

export default Footer