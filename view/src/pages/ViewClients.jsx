import React, { useEffect, Fragment } from 'react';
import { withRouter, useHistory } from 'react-router-dom'

// Hooks imports //
import UseApi from '../hooks/UseApi';

// Components imports //
import ListClients from '../components/ListClients';


const ViewClients = () => {
    const { result, error, isLoading, ApiFunction } = UseApi('GET', 'http://localhost:4000/clientes', {});
    let history = useHistory();


    // Hook para llamar a la API, y obtener todos los clientes.
    useEffect(() => {
        ApiFunction();
    }, [])


    // Validacion de cargar.
    if (isLoading) {
        return (<p>Cargando clientes desde la base de datos...</p>);
    }

    return (
        <main className="container mt-5">
            <h1>Listado de clientes de mongo DB</h1>

            {!error ?
                <Fragment >
                    <div className="row mt-5">
                        <ListClients data={result.data} />
                    </div>
                    <div className="row mt-5">
                        <button className="btn btn-primary" onClick={() => { history.push('/nuevocliente') }}>Agregar cliente</button>
                    </div>
                </Fragment>

                : <p>{error}</p>
            }

        </main>
    );
}

export default withRouter(ViewClients);