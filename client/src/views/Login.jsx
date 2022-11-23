import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

export const LOGIN_TITLE = 'Login';

export function Form() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const tryLogin = () => {
        const data = { 
            name: name, 
            password: password 
        }
        console.log("data", data)
		axios.post('http://localhost:3001/api/user/login', data)
			.then((res) => {
                console.log("result", res)
            })
			.catch((err) => {
                console.log("error", err)
            });
	};

	return (
		<Box className="exo_form exo_form_login">
			<TextField id="outlined-basic" label="name" variant="outlined" value={name} onChange={handleNameChange} />
			<TextField id="outlined-basic" label="password" type="password" variant="outlined" value={password} onChange={handlePasswordChange} />
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
