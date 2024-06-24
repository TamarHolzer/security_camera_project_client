import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import HomePage from './pages/HomePage'

//import Xy_click from './components/xy_click';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <HomePage/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
