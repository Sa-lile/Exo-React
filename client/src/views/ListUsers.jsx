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

export const LIST_TITLE_USERS = 'List Users';

const ListUsers = () => {
	const [rows, setRows] = useState([]);

    useEffect(() => {
        // Once executed
        recoverInformations()
    }, [])
    
    function recoverInformations() {
        axiosCustomInstance.get('/user/list').then( res => {
            setRows(res.data)
        }).catch( err => {
            toast.error("Error while retreiving the list of registered users")
        })
    }

	const ListTable = () => {
		return (
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="right">Name</TableCell>
							<TableCell align="right">Email</TableCell>
							<TableCell align="right">Téléphone</TableCell>
							{/* <TableCell align="right">Password</TableCell> */}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.email}</TableCell>
								<TableCell align="right">{row.telephone}</TableCell>
								{/* <TableCell align="right">{row.password}</TableCell> */}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
	};

	return (
		<div>
			<h1>{LIST_TITLE_USERS}</h1>
			<ListTable />
		</div>
	);
};

export default ListUsers;
