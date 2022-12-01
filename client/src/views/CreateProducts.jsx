import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { axiosCustomInstance } from '../conf/axiosConf';

/** Create a new product **/

const CreateProducts = (props) => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [quantity, setQuantity] = useState('');

	useEffect(() => {
		//4 Modify CreateProduct check if props of edit exist
		if (props.productData?.id) {
			setName(props.productData.name);
			setPrice(props.productData.price);
			setQuantity(props.productData.quantity);
		}
	}, [props.productData]);

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};

	const handleQuantityChange = (e) => {
		setQuantity(e.target.value);
	};

	/** Send the information to the server **/
	const tryRegisterProduct = () => {
		const data = {
			name: name,
			price: price,
			quantity: quantity,
		};
		const id = toast.loading('Please wait...');
		axiosCustomInstance
			.post('/product/create', data)
			.then((res) => {
				toast.update(id, { render: 'Your registration is successfull', type: 'success', isLoading: false, autoClose: 5000 });
				setName('');
				setPrice('');
				setQuantity('');
				finishCreate();
				if (props.recoverInformations) {
					props.recoverInformations();
				}
				console.log('result', res);
			})
			.catch((err) => {
				let message3 = err?.response?.data ?? 'Error while Registering';
				toast.error(id, { render: message3.toUpperCase(), type: 'error', isLoading: false, autoClose: 5000 });
				console.log('error', err);
			});
	};

	const checkIfEditOrCreate = () => {
		console.log(props.productData); // C'est important de mettre props.EditProduct sinon ne founctionne pas.
		if ( props.productData?.id && props.EditProduct) {
			//4 change condition to check props
			//props.productData(true);
			props.EditProduct(
				props.productData.id,
				name,
				price,
				quantity
			); //5  Use EditProduct instead of tryRegisterProduct
		} else {    
			tryRegisterProduct();
		}
	};

	const finishCreate = () => {
		if (props.setShowCreate) {
			props.setShowCreate(false);
		}
	};

	return (
		<Box className="exoRegister">
			<TextField id="outlined-name" label="Name" value={name} onChange={handleNameChange} />
			<TextField id="outlined-basic" label="Price" type="Price" variant="outlined" value={price} onChange={handlePriceChange} />
			<TextField id="outlined-basic" label="Quantity" type="Quantity" variant="outlined" value={quantity} onChange={handleQuantityChange} />
			<Box>
				<Button onClick={finishCreate} variant="contained">
					Cancel
				</Button>
				<Button onClick={checkIfEditOrCreate} variant="contained">
					Envoyer
				</Button>
			</Box>
		</Box>
	);
};

export default CreateProducts;
