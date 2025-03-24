import './style.css'; 
import Navbar from "./components/Navbar/navbar";
import Blog from "./components/Blog/blog";
import Education from "./components/Education/education";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Blog/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;