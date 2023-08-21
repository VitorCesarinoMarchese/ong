import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Info from './components/Info';
import Problem from './components/Problem';
import Solucao from './components/Solucao';
import Contatos from './components/Contatos';
import './App.css';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
      <Problem></Problem>
      <Solucao></Solucao>
      <Contatos></Contatos>
      <Footer></Footer>
    </>
  );
}

export default App;
