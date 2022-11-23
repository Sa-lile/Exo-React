import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import axios from 'axios';

export const INSCRIPTION_TITLE = 'Inscription';

export function Register() {
    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [telephone, setTelephone] = useState('');
	const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmaildChange = (e) => {
        setEmail(e.target.value)
    }

    const handleTelephoneChange = (e) => {
        setTelephone(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    // Send information to the server (data)
    const tryRegister = () => {
        const data = { 
            name: name,
            email: email,
            telephone: telephone, 
            password: password 
        }
        console.log("data", data)
		axios.post('http://localhost:3001/api/user/Inscription', data)
			.then((res) => {
                console.log("result", res)
            })
			.catch((err) => {
                console.log("error", err)
            });
	};

    return (
        <Box className="exo_regidter">
            <TextField 
                id="outlined-name" 
                label="Name" 
                value={name} 
                onChange={handleNameChange} 
            />
            <TextField
                id="outlined-basic"
                label="Email"
                type="Email"
                variant="outlined" 
                value={email}
                onChange={handleEmaildChange}
        />
          <TextField
                id="outlined-basic"
                label="Téléphone"
                type="Telephone"
                variant="outlined" 
                value={telephone}
                onChange={handleTelephoneChange}
        />
        <TextField 
                id="outlined-basic"
                label="password"
                type="password"
                variant="outlined" 
                value={password}
                onChange={handlePasswordChange}
            />
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
            <Register/>
		</div>
	);
};

export default Inscription;
