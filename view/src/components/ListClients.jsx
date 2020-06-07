import React, { Fragment } from 'react';
import axios from 'axios'

// Router import // 
import { Link } from 'react-router-dom';

const ListClients = (props) => {

    //Funcion para eliminar un usuario.
    const deleteClient = async (id) => {
        const res = await axios.delete(`http://localhost:4000/clientes/${id}`, { _id: id });
        alert(res.data)
    }

    return (
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Empresa</th>
                    <th scope="col">Email</th>
                    {
                        props.data && props.data[0]._id ? <th scope="col">Accion</th> : <Fragment />
                    }

                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item, key) =>
                        <tr key={key}>
                            <th scope="row">{key}</th>
                            <th scope="row">{item.nombre}</th>
                            <th scope="row">{item.apellido}</th>
                            <th scope="row">{item.empresa}</th>
                            <th scope="row">{item.email}</th>
                            {
                                props.data && props.data[0]._id ?
                                    <th scope="row">
                                        <Link className="btn btn-warning mr-2" to={`cliente/${item._id}`}>Actualizar</Link>
                                        <button className="btn btn-danger" onClick={() => deleteClient(item._id)}>Borrar</button>
                                    </th>
                                    : <Fragment />
                            }
                        </tr>
                    )
                }

            </tbody>
        </table>
    );
}

export default ListClients;