import './App.css';
import Header from './component/Header';
import Section from './component/Section';
import About from './component/About';
import Project from './component/Project';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  return (
   <div className='App'>
    <Header/>
    <Section/>
    <About/>
    <Project/>
    <Resume/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default App;
