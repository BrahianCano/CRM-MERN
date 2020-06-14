import React from 'react';

// Components imports //
import FormClient from '../components/FormClient';


const AddClients = () => {

    return (
        <main className="container mt-5">
            <h1>Agregar un cliente nuevo a base de datos</h1>
            <FormClient method='POST' uri='http://localhost:4000/clientes' />
        </main>
    );
}

export default AddClients;