import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurantlist';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Viewrestaurant from './components/Viewrestaurant';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header/>
         <Routes>
          <Route path='/' element={<Restaurantlist/>} />
          <Route path='view-restaurant/:id' element={<Viewrestaurant/>} />

         </Routes>
        </header>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
