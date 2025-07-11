import "./styles.css";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Footer } from "./components/footer";
import { Header } from './components/header';
import { BrowserRouter } from 'react-router';
import { AppRouter } from './routes/router';
import NavbarMenu from './components/NavbarMenu';
import PaginationControls from './components/PaginationControls';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />
        <AppRouter />
        <NavbarMenu />
        <PaginationControls />
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
