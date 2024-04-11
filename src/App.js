import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      {/* <div className="">.</div> */}
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
