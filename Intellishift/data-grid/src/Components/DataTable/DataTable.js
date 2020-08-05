
import React,{useState} from 'react';
import MaterialTable from 'material-table';
import { makeStyles} from '@material-ui/core/styles';
 const DataTable=(props) => {
	 const [columns, setColumns] = useState([
    {

      title: 'Name', field: 'name',
      editComponent: props => (
        <input
          type="text"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      )
    },
        { title: 'Last Name', field: 'lastname',validate:rowData => rowData.lastname.length > 3},
        { title: 'Designation', field: 'designation',validate:rowData => rowData.designation.length > 3 },
        { title: 'Address',field: 'address'},
        { title: 'Mobile Number',field: 'mobile',validate: rowData => rowData.mobile > 1900},
        { title: 'Pincode',field: 'pin'},
        { title: 'District',field: 'dist'}

  ]);

  const [data, setData] = useState([
        { name: 'Abhi', lastname: 'Kumar', address: 'India', mobile:123434666,designation: "Doctor", pin:453453,dist:'patna'},
        { name: 'Saurav', lastname: 'Singh', address: 'USA',mobile:99999999, designation: "Engineer",pin:453453,dist:'patna' },
        { name: 'Awanish', lastname: 'Kumar',  address: 'UK',mobile:6677777,designation: "Actor",pin:453453,dist:'patna' },
        { name: 'Bipin', lastname: 'Srivatva',  address: 'Australia',mobile:4444444,designation: "Doctor",pin:453453,dist:'patna'},
        { name: 'Shubham', lastname: 'Kumar',address: 'UK',mobile:33333333, designation: "Actor", pin:453453,dist:'patna' },
        { name: 'Sony', lastname: 'Gupta', address: 'Australia',mobile:7777777, designation: "Playback Singer",pin:453453,dist:'patna'},
        { name: 'Shu', lastname: 'Kumar',  address: 'UK',mobile:6666666,designation: "Actor",pin:453453,dist:'patna' },
        { name: 'Ritu', lastname: 'Kumari',  address: 'Australia',mobile:4444444,designation: "Playback Singer",pin:453453,dist:'patna' }
        
  ]);
  const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 50,
  },
});
const classes = useStyles();
   return( 
   	 <MaterialTable
   	 className={classes.container}
      title="Data-Grid"
      columns={columns}
      data={data}
      options={{
        selection: true,
        grouping: true,
        fixedColumns: {
        left: 0, 
        right: 2
      }
      }}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
     
      }}
       
    />)
  }
  export default DataTable;