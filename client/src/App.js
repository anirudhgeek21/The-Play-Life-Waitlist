import logo from './logo.svg';
import './App.css';
import Test from './components/Testing';
import Navbar from './components/desktop/Navbar';
import Footer from './components/desktop/Footer';
import GetInTouch from './components/desktop/GetInTouch';
import Img from './components/tpl_logo_bgrem.png';
import Card from './components/desktop/Card';
import Card2 from './components/desktop/Card2';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Card />
      <Card2 />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
