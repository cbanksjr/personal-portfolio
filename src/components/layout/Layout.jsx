/** @format */
import Nav from "../Nav";
import Profile from "../Profile";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";

const Layout = () => {

  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-500">
      <Nav/>
        <Profile />
        <About />
        <Projects />
        <Footer />
    </div>
  );
};

export default Layout;
