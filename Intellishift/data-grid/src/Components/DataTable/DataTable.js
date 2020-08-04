'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import MoodEditor from './moodEditor.js';
import MoodRenderer from './moodRenderer.js';
import NumericEditor from './numericEditor.js';

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          field: 'name',
          width: 300,
          editable: true,
          cellEditor: 'agRichSelectCellEditor',
          cellEditorParams: {
            values: [
              'Bob',
              'Harry',
              'Sally',
              'Mary',
              'John',
              'Jack',
              'Sue',
              'Sean',
              'Niall',
              'Albert',
              'Fred',
              'Jenny',
              'Larry',
            ],
          },
        },
        {
          field: 'mood',
          cellRenderer: 'moodRenderer',
          cellEditor: 'moodEditor',
          editable: true,
          width: 300,
        },
        {
          headerName: 'Numeric',
          field: 'number',
          cellEditor: 'numericEditor',
          editable: true,
          width: 280,
        },
      ],
      rowData: this.createRowData(),
      frameworkComponents: {
        moodRenderer: MoodRenderer,
        moodEditor: MoodEditor,
        numericEditor: NumericEditor,
      },
      defaultColDef: {
        editable: true,
        sortable: true,
        flex: 1,
        minWidth: 100,
        filter: true,
        resizable: true,
      },
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  createRowData = () => {
    return [
      {
        name: 'Bob',
        mood: 'Happy',
        number: 10,
      },
      {
        name: 'Harry',
        mood: 'Sad',
        number: 3,
      },
      {
        name: 'Sally',
        mood: 'Happy',
        number: 20,
      },
      {
        name: 'Mary',
        mood: 'Sad',
        number: 5,
      },
      {
        name: 'John',
        mood: 'Happy',
        number: 15,
      },
      {
        name: 'Jack',
        mood: 'Happy',
        number: 25,
      },
      {
        name: 'Sue',
        mood: 'Sad',
        number: 43,
      },
      {
        name: 'Sean',
        mood: 'Sad',
        number: 1335,
      },
      {
        name: 'Niall',
        mood: 'Happy',
        number: 2,
      },
      {
        name: 'Alberto',
        mood: 'Happy',
        number: 123,
      },
      {
        name: 'Fred',
        mood: 'Sad',
        number: 532,
      },
      {
        name: 'Jenny',
        mood: 'Happy',
        number: 34,
      },
      {
        name: 'Larry',
        mood: 'Happy',
        number: 13,
      },
    ];
  };

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div style={{ height: '100%', boxSizing: 'border-box' }}>
          <div
            id="myGrid"
            style={{
              height: '100%',
              width: '100%',
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              modules={this.state.modules}
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              frameworkComponents={this.state.frameworkComponents}
              defaultColDef={this.state.defaultColDef}
              onGridReady={this.onGridReady}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DataTable;
