/** @format */
import Nav from "../Nav";
import Profile from "../Profile";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-500">
      <Nav />
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
