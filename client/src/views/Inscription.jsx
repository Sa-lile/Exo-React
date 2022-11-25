import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { toast } from 'react-toastify'
import { axiosCustomInstance } from '../conf/axiosConf';

export const INSCRIPTION_TITLE = 'Inscription';

export function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [telephone, setTelephone] = useState('');
	const [password, setPassword] = useState('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleEmaildChange = (e) => {
		setEmail(e.target.value);
	};

	const handleTelephoneChange = (e) => {
		setTelephone(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	// Send information to the server (data)
	const tryRegister = () => {
		const data = {
			name: name,
			email: email,
			telephone: telephone,
			password: password,
		};
		const id = toast.loading("Please wait...")
		axiosCustomInstance
			.post('/user/inscription', data)
			.then((res) => {
				toast.update(id, { render:'Register is succesfull', type: "success", isLoading: false, autoClose: 5000 })
				setName('')
				setEmail('')
				setTelephone('')
				setPassword('')
				console.log('result', res);
			})
			.catch((err) => {
				/* let message = ''
				if ( err && err.response && err?.response?.data ) {
					message = err.response.data
				} else {
					message = 'Error while Registering'
				}
				let message3 = err?.response?.data ? err.response.data : 'Error while Registering' */
				let message2 = err?.response?.data ?? 'Error while Registering'
				toast.update(id, { render: message2.toUpperCase(), type: "error", isLoading: false, autoClose: 5000 })
				console.log('error', err);
			});
	};

	return (
		<Box className="exo_regidter">
			<TextField id="outlined-name" label="Name" value={name} onChange={handleNameChange} />
			<TextField id="outlined-basic" label="Email" type="Email" variant="outlined" value={email} onChange={handleEmaildChange} />
			<TextField id="outlined-basic" label="Téléphone" type="Telephone" variant="outlined" value={telephone} onChange={handleTelephoneChange} />
			<TextField id="outlined-basic" label="Password" type="password" variant="outlined" value={password} onChange={handlePasswordChange} />
			<Button onClick={tryRegister} variant="contained">
				Envoyer
			</Button>
		</Box>
	);
}

const Inscription = () => {
	return (
		<div>
			<h1>{INSCRIPTION_TITLE}</h1>
			<Register />
		</div>
	);
};

export default Inscription;
