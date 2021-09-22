import './App.css';
import Carrousel from './components/carrousel/Carrousel';

import MainHeader from './components/header/MainHeader';
import Slider from "./components/slider/Slider"

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Slider/>
      <Carrousel title="Section 1"/>
      <Carrousel title="Section 2"/>
      <Carrousel title="Section 3"/>
    </div>
  );
}

export default App;
