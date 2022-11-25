import { Box, Button, Link, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosCustomInstance } from '../conf/axiosConf';
import { INSCRIPTION_TITLE } from './Inscription';

export const LOGIN_TITLE = 'Login';
export const DISCONNECT_TITLE = "DISCONNECT";

const Login = ( props ) => {

	function Form() {

		const navigate = useNavigate()
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
	
		const handleEmailChange = (e) => {
			setEmail(e.target.value);
		};
	
		const handlePasswordChange = (e) => {
			setPassword(e.target.value);
		};
	
		const tryLogin = () => {
			const data = {
				email: email,
				password: password,
			};
			console.log('data', data);
			const id = toast.loading("Please wait...")
			axiosCustomInstance
				.post('/user/login', data)
				.then((res) => {
					toast.update(id, { render:'Login is succesfull', type: "success", isLoading: false, autoClose: 5000 })
					setEmail("")
					setPassword("")
					if ( props.setLogged ) {
						props.setLogged(true)
					}
					console.log('result', res);
				})
				.catch((err) => {
					let message2 = err?.response?.data ?? 'Error while Login'
					toast.update(id, { render: message2.toUpperCase(), type: "error", isLoading: false, autoClose: 5000 })
					console.log('error', err);
				});
		};
	
		return (
			<Box className="exo_form exo_form_login">
				<TextField id="outlined-basic" label="Email" type="email" variant="outlined" value={email} onChange={handleEmailChange} />
				<TextField id="outlined-basic" label="Password" type="password" variant="outlined" value={password} onChange={handlePasswordChange} />
				<Button onClick={tryLogin} variant="contained">
					Connexion
				</Button>
				<Link onClick={ () => navigate("/inscription")}>{ INSCRIPTION_TITLE }</Link>
				{/* <h3>{utils.multiply(10,10)}</h3> */}
			</Box>
		);
	}

	return (
		<div>
			<h1>{LOGIN_TITLE}</h1>
			<Form />
		</div>
	);
};

export default Login;
