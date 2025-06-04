import logo from './logo.svg';
import './App.css';


import {Footer} from "./components/footer";
import { Header } from './components/header';
import { BrowserRouter } from 'react-router';
import { AppRouter } from './routes/router';


function App() {
  return (
      <>
      <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Footer/>
      </BrowserRouter>
      </>
  );
}

export default App;
