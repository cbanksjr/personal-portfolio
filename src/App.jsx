/** @format */
import "./App.css";
import Nav from './components/Nav'
import Profile from './components/Profile'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  return (
      <div className="bg-gradient-to-r from-teal-200 to-teal-500">
        <Nav/>
        <Profile />
        <About />
        <Projects />
        <Footer />
      </div>
  )
}

export default App;
