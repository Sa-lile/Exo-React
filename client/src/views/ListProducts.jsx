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
import { Add, Delete, Edit} from '@mui/icons-material';
import CreateProducts from './CreateProducts';

export const LIST_TITLE_PRODUCTS = 'List Products';


function ListProducts() {
	const [rows, setRows] = useState([]);
	const [showCreate, setShowCreate] = useState(false);
	const [productData, setProductData] = useState({});

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

	const StartEditProduct = (value_id, value_name, value_price, value_quantity) => {
		setShowCreate(true); //1 open CreateProducts with showCreate
		const object = {
			id: value_id,
			name: value_name,
			price: value_price,
			quantity: value_quantity,
		};
		setProductData(object); // 2 get row informations and save into a variable { price: ..., id...}
		/**
		 * TODO
		 * 5 Use EditProduct instead of tryRegisterProduct
		 * 6 Reset everything
		 */
	};

	const EditProduct = (id, name, price, quantity) => {
		// const tempId = 7;
		const data = {
			/* id: 6, */
			name: name,
			price: price,
			quantity: quantity,
		};
		console.log(data);
		axiosCustomInstance
			.post('/product/update/' + id, data)
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
										<Edit onClick={() => StartEditProduct(row.id, row.name, row.price, row.quantity)} />
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
			{showCreate ? (
				<CreateProducts
					showCreate={showCreate}
					setShowCreate={setShowCreate}
					recoverInformations={recoverInformations}
					productData={productData} //3 pass variable as props to CreateProducts
					EditProduct={EditProduct} 
				/>
			) : (
				<ShowCreateButton />
			)}

			<ListTable />
		</div>
	);
}

export default ListProducts;
