import { createContext, useState } from "react";

const FormContext = createContext ()

export const FormContextProvider = ({children}) => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contacto, setContacto] = useState('')
    const [dirección, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')


    return (
        
        <FormContext.Provider 
        value ={{
            nombre,setNombre, 
            email, setEmail,
            contacto, setContacto,
            dirección, setDireccion,
            ciudad, setCiudad,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export default FormContext