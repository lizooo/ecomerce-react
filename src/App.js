import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Footer from './components/Footer'


function App() {
  return (
    <div style={{background: '#0D1027'}}>
      <Header />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
