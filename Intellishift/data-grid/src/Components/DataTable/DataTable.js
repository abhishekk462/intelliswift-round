import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	
      columnDefs: [
        {headerName: "Make", field: "athlete"}, 
        {headerName: "Model", field: "age"}, 
        {headerName: "Price", field: "year"},
        {headerName: "Make", field: "date"}, 
        {headerName: "Model", field: "sport"}, 
        {headerName: "Price", field: "gold"},
         {headerName: "Make", field: "silver"}, 
        {headerName: "Model", field: "bronze"}, 
        {headerName: "Price", field: "total"}

      ],
      rowData: []
    }
  }
  componentDidMount(){
  	fetch('./localdata.json')
  	  .then((res)=>res.json())
  	  	.then((rowData)=>this.setState({rowData}))
  	  		console.log("abc",this.state.rowData);
  }
   // componentDidMount() {
   //       fetch('./localdata.json')
   //      .then(result => result.json())
   //      .then(rowData => this.setState({rowData}))
   //      }
  render() {
  	  const {rowData} = this.state;
  	  console.log("11111",rowData);
    return (
      <div
        className="ag-theme-alpine"
        style={{
        height: '250px'}}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default DataTable;