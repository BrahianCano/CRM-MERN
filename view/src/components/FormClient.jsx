import React, { useState, Fragment, useEffect } from 'react';

// Components imports //
import ListClients from '../components/ListClients';

// Hooks imports // 
import UseApi from '../hooks/UseApi';


const FormClient = (props) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [email, setEmail] = useState('');

    const dataView = [{ nombre, apellido, empresa, email }];

    const { result, error, ApiFunction } = UseApi(props.method, props.uri, { nombre, apellido, empresa, email });


    // Funcion para enviar la informacion a la base de datos
    const onSubmit = (event) => {
        event.preventDefault();
        ApiFunction()
    }

    
    //Hook para establecer el estado con los datos que se envian desde el componente UpdateClient
    useEffect(() => {
        if (props.dataUpdate) {
            setNombre(props.dataUpdate.nombre)
            setApellido(props.dataUpdate.apellido)
            setEmpresa(props.dataUpdate.empresa)
            setEmail(props.dataUpdate.email)
        }
    }, [])


    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div className="row m-3">
                    <div className="col">
                        <input type="text" className="form-control"
                            value={nombre}
                            onChange={(event) => { setNombre(event.target.value) }} placeholder="Nombre" />
                    </div>
                    <div className="col">

                        <input type="text" className="form-control"
                            value={apellido}
                            onChange={(event) => { setApellido(event.target.value) }} placeholder="Apellido" />
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col">
                        <input type="text" className="form-control"
                            value={empresa}
                            onChange={(event) => { setEmpresa(event.target.value) }} placeholder="Empresa" />
                    </div>
                    <div className="col">
                        <input type="email" className="form-control"
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }} placeholder="Email" />
                    </div>
                </div>
                <div className="row m-3">
                    <button type="submit" className="btn btn-primary mb-2">Enviar datos</button>
                </div>
            </form>
            {
                error ? <p>Hubo un error = {error}</p> :
                    result.data ? <p>Datos enviados con exito = {result.data.mensaje}</p> : <Fragment />
            }
            <div className="row mt-5">
                <h3>Visualizacion de registro</h3>
                <ListClients data={dataView} />
            </div>
        </Fragment>
    );
}

export default FormClient;