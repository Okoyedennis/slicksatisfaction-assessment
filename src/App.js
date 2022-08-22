import './App.css';
import Content from './components/Content/Content';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
