/** @format */
import Nav from "../Nav";
import Profile from "../Profile";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-500">
      <Nav
          link1 = "https://www.linkedin.com/in/craig-banks-jr-7a9126106/"
          link2 = "https://github.com/cbanksjr"
         />
        <Profile 
          name = "Craig Banks Jr"
          occupation = "Full Stack Developer"
          statement = "I am a developer based in Columbus, OH" 
          />
        <About />
        <Projects  />
        <Footer
          copyright = "Copyright &copy; Craig Banks Jr 2023"
         />
    </div>
  );
};

export default Layout;
