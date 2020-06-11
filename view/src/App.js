import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importar Google Analytics //
import 'firebase/analytics';
import { useFirebaseApp } from 'reactfire';

// Importar paginas //
import ViewClients from './pages/ViewClients';
import AddClients from './pages/AddClients';
import UptatedClient from './pages/UpdateClient';
import LogInClient from './pages/LogInClient';


function App() {
  const firebase = useFirebaseApp();

  useEffect(()=>{
    firebase.analytics();
  },[])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/clientes' component={ViewClients} />
        <Route exact path='/nuevocliente' component={AddClients} />
        <Route exact path='/cliente/:id' component={UptatedClient} />
        <Route exact path='/' component={LogInClient} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
