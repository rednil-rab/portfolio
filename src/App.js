import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'
import Section4 from './Components/Section4/Section4'
import NavBar from './Components/Navbar/Navbar'
import './App.css';


function App() {
  return (
    <div className="App">
      <Section1 />
      <NavBar />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
