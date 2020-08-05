import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../Components/LoginForm/Login"
import DataTable from "../Components/DataTable/DataTable"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { Nav, NavItem, NavLink } from "reactstrap";
import history from '../history';

const RoutesPage = () => {
  return (
    <Router history={history}>
        <Nav>
          <NavItem>
            <NavLink href="/">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/datagrid">Data-Grid</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
           <Route path={"/datagrid"} >
            <DataTable/>
          </Route>

        </Switch>
    </Router>
  );
}
export default RoutesPage;