import './App';
import Header from './containers/App/Header/Header'
import Footer from './containers/App/Footer/Footer'
import Navbar from './containers/Navigation/Navbar'


function App() {
  return (
    <div style={{background: '#0D1027'}}>
      <Header />
          <Navbar />
      <Footer />
    </div>
  );
}

export default App;
