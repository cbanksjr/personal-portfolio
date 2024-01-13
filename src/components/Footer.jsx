import PropTypes from 'prop-types';

const Footer = ({ copyright }) => {
    return (
        <footer>
          <h4 className="bg-black p-10 text-white font-semibold mt-20 text-center">{copyright}</h4>
        </footer>
    )
}

Footer.propTypes = {
    copyright: PropTypes.string
}

export default Footer