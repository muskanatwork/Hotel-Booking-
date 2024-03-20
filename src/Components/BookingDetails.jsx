import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { Link} from "react-router-dom";

function createData(name, calories) {
    return { name, calories };
}

function TableComponent() {
    const location = useLocation();
    console.log(location.state)
    const rows = [
        createData('Full name', location.state.firstName + " " + location.state.lastName),
        createData('Phone number', location.state.phoneNumber),
        createData('Email', location.state.email),
        createData('Rooms', location.state.room),
        createData('Date', location.state.checkin + " To " +location.state.checkout),
    ];
    return (
        <div>
            <Typography variant="h3">
                Thank You
            </Typography>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <Link to={`/`}>
                <Button variant="contained">Home</Button>
            </Link>

        </div>
    );
}

export default TableComponent