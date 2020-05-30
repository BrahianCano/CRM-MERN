import React from 'react';

const ListClients = (props) => {

    return (
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Empresa</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item, key) =>
                        <tr key={key}>
                            <th scope="row">{key}</th>
                            <td scope="row">{item.nombre}</td>
                            <td scope="row">{item.apellido}</td>
                            <td scope="row">{item.empresa}</td>
                            <td scope="row">{item.email}</td>
                        </tr>
                    )
                }

            </tbody>
        </table>
    );
}

export default ListClients;