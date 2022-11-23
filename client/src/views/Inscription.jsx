import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

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

    const tryRegister = () => {
        /* axios.post('/api/login', { name: name,email: email, telephone:telephone}) */
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
