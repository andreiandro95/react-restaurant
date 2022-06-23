import './App.css';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import Menu from './Pages/Menu';
import Gallery from './Pages/Gallery';
import Reservation from './Pages/Reservation';

function App() {
  return (
    <Router>
		<div className='App'>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/menu" element={<Menu />} />
				<Route exact path="/gallery" element={<Gallery />} />
				<Route exact path="/reservation" element={<Reservation />} />
			</Routes>
			<Footer />
		</div>
    </Router>
  );
}

export default App;
