import './index.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import BeforeAfter from './components/befAft';
import Packages from './components/packages';


function App() {

  return (
    <div className="">
      <Nav/>
      <Hero/>
      <BeforeAfter/>
      <Packages/>
      <div className="w-full h-[28rem] bg-[#181520]"></div>
    </div>
  );
}

export default App;
