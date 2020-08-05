import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import MaterialTable from 'material-table';

import {TableHead,TableContainer,TableCell,TableBody,Table,Paper,Checkbox } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';





function createData(firstname, lastname, age, mobnumber, address) {
  return { firstname, lastname, age, mobnumber, address };
}
const columns = [
  { id: 'firstname', label: 'First Name', minWidth: 170 },
  { id: 'lastname', label: 'Last Name', minWidth: 100 },
  { id: 'age', label: 'age', minWidth: 100 },
  { id: 'mobnumber', label: 'Mobile Number', minWidth: 100 },
  { id: 'address', label: 'Address', minWidth: 100 }
 
];

const rows = [
  createData('Abhishek', 'Kumar', 29, 6364236112,"patna"),
  createData('Saurav', 'Kumar', 29, 87834758583,"patna"),
  createData('Sony', 'Kumari', 27, 2345673456,"patna"),
  createData('Awanish', 'Kumar', 28, 7676127870,"patna"),
  createData('Bipin', 'Kumar', 30, 7676127870,"patna"),
  createData('Abhishek', 'Kumar', 29, 6364236112,"patna"),
  createData('Saurav', 'Kumar', 29, 87834758583,"patna"),
  createData('Sony', 'Kumari', 27, 2345673456,"patna"),
  createData('Awanish', 'Kumar', 28, 7676127870,"patna"),
  createData('Bipin', 'Kumar', 30, 7676127870,"patna"),
  createData('Abhishek', 'Kumar', 29, 6364236112,"patna"),
  createData('Saurav', 'Kumar', 29, 87834758583,"patna"),
  createData('Sony', 'Kumari', 27, 2345673456,"patna"),
  createData('Awanish', 'Kumar', 28, 7676127870,"patna"),
  createData('Bipin', 'Kumar', 30, 7676127870,"patna"),
  createData('Abhishek', 'Kumar', 29, 6364236112,"patna"),
  createData('Saurav', 'Kumar', 29, 87834758583,"patna"),
  createData('Sony', 'Kumari', 27, 2345673456,"patna"),
  createData('Awanish', 'Kumar', 28, 7676127870,"patna"),
  createData('Bipin', 'Kumar', 30, 7676127870,"patna")
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function SimpleTable(props) {
  const [selected, setSelected] = React.useState([]);
  const classes = useStyles();
  const {numSelected,
    rowCount,onSelectAllClick}=props;
    
   
    
  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow >
          <TableCell padding="checkbox">
          </TableCell>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              style={{ minWidth: column.minWidth }}>
              {column.label}  
            </TableCell>
          ))}
          </TableRow>
        
        </TableHead>
        <TableBody>

          {rows.map((row) => (
            <TableRow key={row.firstname}>
            <TableCell padding="checkbox">
            <Checkbox
            />
          </TableCell>
              <TableCell>{row.firstname}</TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.mobnumber}</TableCell>
              <TableCell>{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  
}
SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired
};
