import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

// Componnets imports //
import FormClient from '../components/FormClient';

// Hooks imports //
import UseApi from '../hooks/UseApi';


const UpdateClient = () => {
    const { id } = useParams();
    const { result, error, isLoading, ApiFunction } = UseApi('GET', `http://localhost:4000/clientes/${id}`, {});


    // Hook llamar de la API la informacion de un cliente en especifico.
    useEffect(() => {
        ApiFunction();
    }, [])


    // Validacion de carga.
    if (isLoading) {
        return (<p>Cargando informacion desde la base de datos...</p>);
    }


    // Validacion de error.
    if (error) {
        return (<p>{error}</p>);
    }


    // Funcion para eliminar un cliente.
    const deleteClient = async () => {
        const res = await axios.delete(`http://localhost:4000/clientes/${id}`, { _id: id });
        alert(res.data)
    }

    return (
        <main className="container mt-5">
            <h1>Actualizar informacion del cliente</h1>
            <FormClient method='PUT' uri={`http://localhost:4000/clientes/${id}`} dataUpdate={result.data} />
            <hr />
            <h3>Eliminar</h3>
            <p>¿Deseas eliminar el usuario <b>{result.data.nombre}</b>?</p>
            <button className="btn btn-danger" onClick={() => deleteClient()}>Eliminar</button>
        </main>
    );
}

export default UpdateClient;