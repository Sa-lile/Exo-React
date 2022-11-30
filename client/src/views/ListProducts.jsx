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
import { Button, IconButton } from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';
import CreateProducts from './CreateProducts';

export const LIST_TITLE_PRODUCTS = 'List Products';

function ListProducts() {
	const [rows, setRows] = useState([]);
	const [showCreate, setShowCreate] = useState(false);

	useEffect(() => {
		// Once executed
		recoverInformations();
	}, [showCreate]);

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

	const StartEditProduct = () => {
		/**
		 * TODO
		 * 1 open CreateProducts with showCreate 
		 * 
		 * 2 get row informations and save into a variable { price: ..., id...}
		 *
		 * 3 pass variable as props to CreateProducts
		 *
		 * 4 Modify CreateProduct check if props of edit exist
		 *
		 * 5 Use EditProduct instead of tryRegisterProduct
		 * 6 Reset everything
		 */
	}

	const EditProduct = ( id ) => {
		const tempId = 7;
		const data = {
			/* id: 6, */
			name: 'IphoneX',
			price: 1400,
			quantity: 3,
		};
		console.log(data);
		axiosCustomInstance
			.post('/product/update/' + tempId, data)
			.then((res) => {
				recoverInformations();
				/* toast.update(id, { render: 'Your modification is completed', type: 'update', isLoading: false, autoClose: 5000 }); */
			})
			.catch((err) => {
				toast.error('Error while retreiving the list of registered products');
			});
	};

	const DeleteProduct = (id) => {
		let url = `/product/delete/${id}`;
		console.log(url);
		axiosCustomInstance
			.delete('/product/delete/' + id)
			.then((res) => {
				recoverInformations();
				/* toast.update(id, { render: 'Your registration is deleted', type: 'delete', isLoading: false, autoClose: 5000 }); */
			})
			.catch((err) => {
				/* toast.error('Error while retreiving the list of registered products'); */
			});
	};

	const ListTable = () => {
		return (
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="right">ID</TableCell>
							<TableCell align="right">Name</TableCell>
							<TableCell align="right">Price</TableCell>
							<TableCell align="right">Quantity</TableCell>
							<TableCell align="right">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell align="right">{row.id}</TableCell>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.price}</TableCell>
								<TableCell align="right">{row.quantity}</TableCell>
								<TableCell align="right">
									<IconButton>
										<Edit onClick={StartEditProduct} />
									</IconButton>
									<IconButton>
										<Delete onClick={() => DeleteProduct(row.id)} />
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
			<Button variant="contained" startIcon={<Add />} onClick={(e) => setShowCreate(true)}>
				Create
			</Button>
		);
	};

	return (
		<div>
			<h1>{LIST_TITLE_PRODUCTS}</h1>
			{showCreate ? <CreateProducts showCreate={showCreate} setShowCreate={setShowCreate} /> : <ShowCreateButton />}
			<ListTable />
		</div>
	);
}

export default ListProducts;
