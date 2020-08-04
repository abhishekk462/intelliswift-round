import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../Components/LoginForm/Login"
import DataTable from "../Components/DataTable/DataTable"
import { Nav, NavItem, NavLink } from "reactstrap";

const RoutesPage = () => {
  return (
    <Router>
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
            <DataTable/>
          </Route>
           <Route exact path="/datagrid">
           
            <DataTable/>
          </Route>
        </Switch>
    </Router>
  );
}
export default RoutesPage;