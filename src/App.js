import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {container} from ''

function App() {
  return (
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
  );
}

export default App;
