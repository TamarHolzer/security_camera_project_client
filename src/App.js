import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ClickPage from './pages/ClickPage';
import HomePage from './pages/HomePage'

//import Xy_click from './components/xy_click';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <ClickPage/> */}
      <HomePage/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
