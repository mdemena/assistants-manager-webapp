import React, { useReducer, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="p-grid">
      <div className="p-col"></div>
      <div className="p-col">
        <Switch>
          <Route exact path="/">
              <div className="p-grid">
                <div className="p-col"></div>
                <div className="p-col"></div>
              </div>
          </Route>
          <Route exact path="/assistance/:id">
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
