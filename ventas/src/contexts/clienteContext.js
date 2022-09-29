import React, { createContext, useReducer } from "react";
import { OBTENER_CLIENTES, REGISTRAR_CLIENTE, OBTENER_CLIENTE, MODIFICAR_CLIENTE, ELIMINAR_CLIENTE} from "../components/conts/actionTypes";
import ClienteReducer from "../components/Reducer/ClienteReducer";
import { v4 as uuidv4 } from 'uuid';

export const ClienteContext = createContext();


export const ClienteContextProvider = props => {
    const initialState = {
        clientesList:[],
        clienteActual: null,   
    }

    const [state, dispatch] = useReducer(ClienteReducer, initialState);
    
    const obtenerClientes = () => {
        const clientes = [

                {
                    "idCliente": 1,
                    "nombres": "Duvan",
                    "apellidos": "Saenz",
                    "direccion": "av.Guavinal",
                    "telefono": "3186220804",
                    "email": "prueba@hotmail.com"
                },
                {
                    "idCliente": 2,
                    "nombres": "yovanny",
                    "apellidos": "Saenz",
                    "direccion": "av.Guavinal",
                    "telefono": "3186220803",
                    "email": "prueba@hotmail.com"
                },
                {
                    "idCliente": 3,
                    "nombres": "Diego",
                    "apellidos": "Saenz",
                    "direccion": "av.Guavinal",
                    "telefono": "3186220803",
                    "email": "prueba@hotmail.com"
                }
        ]

        dispatch({
            type: OBTENER_CLIENTES, 
            payload: clientes
        })
    }
     const registrarCliente = cliente => {
        let clienteNuevo ={
            ...cliente,
            idCliente: uuidv4()
        }
        dispatch({
            type: REGISTRAR_CLIENTE, 
            payload: clienteNuevo
        });
     }
     
     
    const obtenerCliente = cliente => {

        dispatch({
            type: OBTENER_CLIENTE, 
            payload: cliente
        });
    }

    const actualizarCliente = cliente => {

        dispatch({
            type: MODIFICAR_CLIENTE, 
            payload: cliente,
        });
    }

    const eliminarCliente = idCliente => {

        dispatch({
            type: ELIMINAR_CLIENTE, 
            payload: idCliente,
        });
    }


    return (

        <ClienteContext.Provider
        value={{
            clientesList: state.clientesList,
            clienteActual: state.clienteActual,

            obtenerClientes,
            registrarCliente,
            obtenerCliente,
            actualizarCliente,
            eliminarCliente
        }}>
            {props.children}
        </ClienteContext.Provider>
    )
}

