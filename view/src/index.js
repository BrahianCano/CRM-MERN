import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importar el objeto de configuracion de firebase // 
import firebaseConfig from './assets/scripts/firebaseConfig';

// Importar provider de firebase de manera global //
import { FirebaseAppProvider } from 'reactfire';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback='Cargando datos de firebase...'>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

