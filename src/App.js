import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Presentation from './Presentation';
import PortfolioSite from './gpt.jsx';
import Projects from './Projects.jsx';

function App() {
  return (
    <>
      <Header /> 
      <Presentation />
      <PortfolioSite />
      <Projects />
    </>
  );
}

export default App;
