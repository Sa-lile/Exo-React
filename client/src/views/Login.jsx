import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

export const LOGIN_TITLE = 'Login';

export function Form() {
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
		axios
			.post('http://localhost:3001/api/user/login', data)
			.then((res) => {
				console.log('result', res);
			})
			.catch((err) => {
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
			{/* <h3>{utils.multiply(10,10)}</h3> */}
		</Box>
	);
}

const Login = () => {
	return (
		<div>
			<h1>{LOGIN_TITLE}</h1>
			<Form />
		</div>
	);
};

export default Login;
