import React from "react";  
import FormCliente from "../components/clientes/FormClientes";
import TableCliente from "../components/clientes/TableCliente";
import TolbarCliente from "../components/clientes/ToolbarCliente";
import Layout from "../components/commons/Layout";
import Modal from "../components/commons/Modal";
import { ClienteContextProvider } from "../contexts/clienteContext";



const Clientes = () => {
  return (
    <Layout>
      <ClienteContextProvider>
        <div className="panel">
            <div className="panel-heading">
                Clientes
            </div>
            <div className="box">
            <TolbarCliente/>
            <TableCliente/>
          </div>
        </div>
        <Modal>
         <FormCliente/>
        </Modal>
        </ClienteContextProvider>
    </Layout>
  );
}

export default Clientes;