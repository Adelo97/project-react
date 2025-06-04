import logo from './logo.svg';
import './App.css';


import {Home} from "./pages/home";
import {Footer} from "./components/footer";
import { About } from './pages/about';
import { Header } from './components/header';

function App() {
  return (
      <>
      <Header/>
      <About/>
      <Footer/>
      </>
  );
}

export default App;
