import "./App.css";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";

function App() {
  return (
    <div id="Base">
      <Header />
      <div className="core">
        <Intro />
        <About />
        <ProjectList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
