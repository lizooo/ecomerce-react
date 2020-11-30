import './App';
import Header from './containers/App/Header/Header'
import Footer from './containers/App/Footer/Footer'
import Navbar from './containers/Navigation/Navbar'
import {MoviesContext} from './components/Contexts/Context'
import {movies} from './components/Card/Cards'


function App() {
  return (
    <div style={{background: '#0D1027'}}>
      <Header />
        <MoviesContext.Provider value={{allMovies: movies}}>
          <Navbar />
        </MoviesContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
