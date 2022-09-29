import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ClienteContext } from "../../contexts/clienteContext";
import {ModalContext} from '../../contexts/ModalContexts';

const FormCliente = () => {

    const {setShowModal} = useContext(ModalContext);
    const {registrarCliente, actualizarCliente, clienteActual, obtenerCliente} = useContext(ClienteContext);

    const clienteDefault = {
        nombres: "",
        apellidos: "",
        direccion: "",
        telefono: "",
        email: ""

    }

    const [cliente, setcliente] = useState(clienteDefault);
    const [mensaje, setMensaje] = useState(null);


    useEffect(() => {
        if(clienteActual !== null) {
            setcliente({
                ...clienteActual,
                direccion: clienteActual.direccion ? clienteActual.direccion :"",
                telefono: clienteActual.telefono ? clienteActual.telefono : "",
            });
        } else{
            setcliente(clienteDefault);
        }
        //slint-disable-next-line
    },[clienteActual]);


    const handleChange = e =>{
        setcliente({...cliente, [e.target.name] : e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();

        //Validar
        if(cliente.nombres.trim() === '' && cliente.apellidos.trim() === '' && cliente.email.trim() === ''){
            setMensaje("los nombres, apellidos y email son obligatorios.");
            return;
        }
        //Obtener objeto a enviar 
        if(clienteActual !== null){
            actualizarCliente(obtenerClienteAEnviar());
        } else {
            registrarCliente(obtenerClienteAEnviar());
        }

        //Cerrar y limpiar
        cerrarModal();
    };

    const limpiarForm = () => {
        setMensaje(null);
        setcliente(clienteDefault);
    };

    const cerrarModal = () => {
        limpiarForm();
        setShowModal(false);
        obtenerCliente(null);
    };

    const obtenerClienteAEnviar = () =>{
        let clienteTemp ={...cliente};
        if(cliente.direccion === "") delete clienteTemp.direccion;
        if(cliente.telefono === "") delete clienteTemp.telefono;
        return clienteTemp;
    }

    return(
            <form onSubmit={handleSubmit}>
                { mensaje ? <div className="notification is-danger">{mensaje}</div> : null }
            <div className="field">
                <label className="label">Nombre completo</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                           autoComplete="off"
                           className="input" 
                           type="text" 
                           placeholder="Nombre" 
                           name="nombres"
                           value={cliente.nombres} 
                           onChange={handleChange}/>

                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <div className="control has-icons-left has-icons-right">
                    <input 
                           autoComplete="off"
                           className="input" 
                           type="text" 
                           placeholder="Apellido" 
                           name="apellidos"
                           value={cliente.apellidos} 
                           onChange={handleChange}/>

                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Direccion</label>
                <div className="control has-icons-left has-icons-right">
                    <input 
                           autoComplete="off"
                           className="input" 
                           type="text" 
                           placeholder="Ingrese su direccion" 
                           name="direccion"
                           value={cliente.direccion} 
                           onChange={handleChange}/>

                    <span className="icon is-small is-left">
                        <i className="fas fa-map-location"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Telefono</label>
                <div className="control has-icons-left has-icons-right">
                    <input 
                           autoComplete="off"
                           className="input" 
                           type="text" 
                           placeholder="Telefono" 
                           name="telefono"
                           value={cliente.telefono} 
                           onChange={handleChange}/>

                    <span className="icon is-small is-left">
                        <i className="fas fa-phone"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input 
                           autoComplete="off"
                           className="input" 
                           type="email" 
                           placeholder="Ingrese su email"
                           name="email" 
                           value={cliente.email} 
                           onChange={handleChange}/>

                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Guardar</button>
                    <button type="button"
                            className="button"
                            onClick={() => cerrarModal()}>Cancelar</button>
                </div>
                
            </div>
        </form>

    );
}

export default FormCliente;