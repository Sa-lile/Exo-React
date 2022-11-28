import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { axiosCustomInstance } from '../conf/axiosConf';
import { Button, IconButton, TextField } from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';

export const LIST_TITLE_PRODUCTS = 'List Products';

const ListProducts = () => {

	const [rows, setRows] = useState([]);
	const [showCreate, setShowCreate] = useState(false);

	useEffect(() => {
		// Once executed
		recoverInformations();
	}, []);

	function recoverInformations() {
		axiosCustomInstance
			.get('/product/list')
			.then((res) => {
				setRows(res.data);
			})
			.catch((err) => {
				toast.error('Error while retreiving the list of registered products');
			});
	}

	const ListTable = () => {
		return (
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="right">Name</TableCell>
							<TableCell align="right">Price</TableCell>
							<TableCell align="right">Quantity</TableCell>
							<TableCell align="right">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.price}</TableCell>
								<TableCell align="right">{row.quantity}</TableCell>
								<TableCell align="right">
									<IconButton>
										<Edit />
									</IconButton>
									<IconButton>
										<Delete />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
	};

	const ShowCreateButton = () => {
		return (
			<Button variant="contained" startIcon={<Add />} onClick={ (e) => setShowCreate(true)}>
				Create
			</Button>
		)
	}

	const ShowCreateFields = () => {
		return (
			<TextField type="text"></TextField>
		)
	}

	return (
		<div>
			<h1>{LIST_TITLE_PRODUCTS}</h1>
			{
				showCreate ?
				<ShowCreateFields/>
				: <ShowCreateButton/>
			}
			<ListTable />
		</div>
	);
};

export default ListProducts;
