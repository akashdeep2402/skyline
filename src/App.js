import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomeScreen from './screens/HomeScreen.js';

function App() {
  return (
    <div className="App">
        <Header/>
        <main className='py-3'>
			<Container>
				<h1 className="text-center py-3" style={{color:'blue'}}>Aa le chak mai aagaya</h1>
				<HomeScreen/> 
			</Container>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
