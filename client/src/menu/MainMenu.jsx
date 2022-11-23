import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { HOME_TITLE } from '../views/Home';
import { INSCRIPTION_TITLE } from '../views/Inscription';
import { LIST_TITLE } from '../views/List';
import { LOGIN_TITLE } from '../views/Login';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {

	const navigate = useNavigate()

	const navTo = ( path ) => {
		//TODO action de changer page
		navigate(path)
	}

	return (
		<Box>
			<Stack direction="row" spacing={2}>
				<MenuItem onClick={ () => navTo("/")}>{ HOME_TITLE }</MenuItem>
				<MenuItem onClick={ () => navTo("/inscription")}>{ INSCRIPTION_TITLE }</MenuItem>
				<MenuItem onClick={ () => navTo("/list")}>{ LIST_TITLE }</MenuItem>
				<MenuItem onClick={ () => navTo("/login")}>{ LOGIN_TITLE }</MenuItem>
			</Stack>
		</Box>
	);
};

export default MainMenu;
