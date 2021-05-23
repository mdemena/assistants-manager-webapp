import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// core components
import Admin from "./layouts/Admin.js";
import RTL from "./layouts/RTL.js";

function App() {
  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  );
}

export default App;
