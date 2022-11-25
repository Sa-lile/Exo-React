import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { HOME_TITLE } from '../views/Home';
import { LIST_TITLE_USERS } from '../views/ListUsers';
import { DISCONNECT_TITLE, LOGIN_TITLE } from '../views/Login';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { axiosCustomInstance } from '../conf/axiosConf';
import { LIST_TITLE_PRODUCTS } from '../views/ListProducts';

const MainMenu = ( props ) => {

	const navigate = useNavigate()
	const [ Title, setTitle ] = useState(LOGIN_TITLE)

	const navTo = ( path ) => {
		navigate(path)
	}

	const LoginOrDisconnectAction = () => {
		if ( props.logged ) {
			const id = toast.loading("Please wait...")
			axiosCustomInstance
				.delete('/user/disconnect')
				.then((res) => {
					toast.update(id, { render:'Disconnect is succesfull', type: "success", isLoading: false, autoClose: 5000 })
					if ( props.setLogged ) {
						props.setLogged(false)
						console.log('Delete successful!');
					}
					console.log('result', res);
				})
				.catch((err) => {
					let message2 = err?.response?.data ?? 'Error while Disconnecting'
					toast.update(id, { render: message2.toUpperCase(), type: "error", isLoading: false, autoClose: 5000 })
					console.log('error', err);
				});
		} else {
			navTo("/login")
		}
	}

	useEffect( () => {
		if ( props.logged ) {
			setTitle( DISCONNECT_TITLE )
		} else {
			setTitle( LOGIN_TITLE )
		}
	}, [props.logged])

	return (
		<Box>
			<Stack direction="row" spacing={2}>
				<MenuItem onClick={ () => navTo("/")}>{ HOME_TITLE }</MenuItem>
				<MenuItem onClick={ () => navTo("/listUsers")}>{ LIST_TITLE_USERS }</MenuItem>
				<MenuItem onClick={ () => navTo("/listProducts")}>{ LIST_TITLE_PRODUCTS }</MenuItem>
				<MenuItem onClick={LoginOrDisconnectAction}>{ Title }</MenuItem>
			</Stack>
		</Box>
	);
};

export default MainMenu;
