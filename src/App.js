import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './pages/Home'
import Header from "./Components/Header"
import Footer from './Components/Footer'
import Services from './pages/Services'

function App() {
  return (<>
  <Header/>
  <Home/>
  <Services/>
  <Footer/>
  
  </>)
}

export default App;
