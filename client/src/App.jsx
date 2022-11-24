import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Inscription from './views/Inscription';
import Login from './views/Login';
import List from './views/List';
import Page404 from './views/Page404';
import MainMenu from './menu/MainMenu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
			<ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
		</div>
	);
}

export default App;
