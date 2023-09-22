import './index.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import BeforeAfter from './components/befAft';
import Packages from './components/packages';


function App() {

  return (
    <div className="w-full bg-[#181520]">
      <Nav/>
      <Hero/>
      {/* <BeforeAfter/> */}
      <Packages/>
      <div className="w-full h-[11rem] bg-[#121018]"></div>
    </div>
  );
}

export default App;
