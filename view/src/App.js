import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Importar paginas //
import ViewClients from './pages/ViewClients';
import AddClients from './pages/AddClients';
import UptatedClient from './pages/UpdateClient';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/clientes' component={ViewClients} />
        <Route exact path='/nuevocliente' component={AddClients} />
        <Route exact path='/cliente/:id' component={UptatedClient} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
