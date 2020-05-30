import React, { useState, Fragment, useEffect } from 'react';

// components //
import ListClients from '../components/ListClients';

// Hooks // 
import UseApi from '../hooks/UseApi';

const FormClient = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [email, setEmail] = useState('');

    const dataView = [{ nombre, apellido, empresa, email }];

    const { result, error, isLoading, ApiFunction } = UseApi('POST', 'http://localhost:3000/clientes', { nombre, apellido, empresa, email });

    const onSubmit = (event) => {
        event.preventDefault();
        ApiFunction()
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div className="row m-3">
                    <div className="col">
                        <input type="text" className="form-control"
                            onChange={(event) => { setNombre(event.target.value) }} placeholder="Nombre" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control"
                            onChange={(event) => { setApellido(event.target.value) }} placeholder="Apellido" />
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col">
                        <input type="text" className="form-control"
                            onChange={(event) => { setEmpresa(event.target.value) }} placeholder="Empresa" />
                    </div>
                    <div className="col">
                        <input type="email" className="form-control"
                            onChange={(event) => { setEmail(event.target.value) }} placeholder="Email" />
                    </div>
                </div>
                <div className="row m-3">
                    <button type="submit" className="btn btn-primary mb-2">Enviar datos</button>
                </div>
            </form>
            {
                error ? <p>Hubo un error => {error}</p> :
                result.data ? <p>Datos enviados con exito => {result.data.mensaje}</p> : <Fragment/>
            }
            <div className="row mt-5">
                <h1>Mis datos</h1>
                <ListClients data={dataView} />
            </div>
        </Fragment>
    );
}

export default FormClient;