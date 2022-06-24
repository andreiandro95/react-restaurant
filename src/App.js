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
				<Route exact path="/react-restaurant/" element={<Homepage />} />
				<Route exact path="/react-restaurant/menu" element={<Menu />} />
				<Route exact path="/react-restaurant/gallery" element={<Gallery />} />
				<Route exact path="/react-restaurant/reservation" element={<Reservation />} />
			</Routes>
			<Footer />
		</div>
    </Router>
  );
}

export default App;
