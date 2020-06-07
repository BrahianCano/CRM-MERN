import React from 'react';

import FormClient from '../components/FormClient';

const AddClients = () => {
    return (
        <main className="container mt-5">
            <h1>Agregar un cliente</h1>
            <FormClient method='POST' uri='http://localhost:4000/clientes' />
        </main>
    );
}

export default AddClients;