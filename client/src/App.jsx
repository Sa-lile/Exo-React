import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Inscription from './views/Inscription';
import Login from './views/Login';
import ListUsers from './views/ListUsers';
import ListProducts  from './views/ListProducts';
import Page404 from './views/Page404';
import MainMenu from './menu/MainMenu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Test from './views/Test';


function App() {
	
	const [logged, setLogged] = useState(false)

	const TutoRoutes = () => {
		return (
			<BrowserRouter>
				<MainMenu logged={logged} setLogged={setLogged} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/inscription" element={<Inscription />} />
					<Route path="/login" element={<Login logged={logged} setLogged={setLogged} />} />
					<Route path="/listUsers" element={<ListUsers />} />
					<Route path="/listProducts" element={<ListProducts />} />
					<Route path="/test" element={<Test />} />
					<Route path="/404" element={<Page404 />} />
					<Route path="*" element={<Navigate to="/404" />} />
				</Routes>
			</BrowserRouter>
		);
	};

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
