import './App.css';
import Footer from './components/Footer'
import ProjectList from './components/ProjectList'
import Header from './components/Header'
import Intro from './components/Intro'

function App() {
  return (
    <div id='Base'>
      <Header />
      <Intro />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;