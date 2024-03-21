import "./styles/styles.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Tutorials from "./components/Tutorials";

function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <About />
      <Projects />
      <Tutorials />
      <Footer />
    </div>
  );
}

export default App;
