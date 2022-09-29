import React, { useContext, useEffect } from "react";
import { ClienteContext } from "../../contexts/clienteContext";
import RowCliente from "./RowClientes";


const TableCliente = () => {

const { clientesList, obtenerClientes } = useContext(ClienteContext);

useEffect(() => {
    obtenerClientes();
    //slint-disable-next-line
}, []);

if(clientesList.length === 0) return <center><p>No existen clientes</p></center>

    return(
        <div className="table-container">
                        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                            <thead >
                                <tr>
                                <th>Acciones</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Direccion</th>
                                <th>telefono</th>
                                <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    clientesList.map(cliente => (
                               <RowCliente cliente={cliente} key={cliente.idCliente}/>
                                ))
                                }      
                            </tbody>    
                        </table>
                </div>    
    );
}

export default TableCliente;