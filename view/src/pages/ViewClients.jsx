import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom'

// Hooks //
import UseApi from '../hooks/UseApi';

// Components //
import ListClients from '../components/ListClients';


const ViewClients = (props) => {
    const { result, error, isLoading, ApiFunction } = UseApi('GET', 'http://localhost:4000/clientes', {});
    const { history } = props;


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
            <h1>Listado de clientes</h1>

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