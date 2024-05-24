import Navbar from "./components/Navbar/navbar"
import Intro from "./components/Intro/intro"
import Aboutme from "./components/AboutMe/aboutme"
import Skills from "./components/Skills/skills"
import Works from "./components/Works/works"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Aboutme/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
