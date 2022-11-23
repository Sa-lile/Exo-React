import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Inscription from './views/Inscription';
import Login from './views/Login';
import List from './views/List';
import Page404 from './views/Page404';
import MainMenu from './menu/MainMenu';

const TutoRoutes = () => {
	return (
		<BrowserRouter>
			<MainMenu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/inscription" element={<Inscription />} />
				<Route path="/login" element={<Login />} />
				<Route path="/list" element={<List />} />
				<Route path="/404" element={<Page404 />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</BrowserRouter>
	);
};

function App() {
	return (
		<div className="App">
			<TutoRoutes />
		</div>
	);
}

export default App;
