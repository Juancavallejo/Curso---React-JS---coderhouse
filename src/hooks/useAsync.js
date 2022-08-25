import { useState, useEffect } from "react"


export const useAsync = (getDatosFireStore, dependencias = []) => {
    const [datos, setDatos] = useState()
    const [error, setError] = useState ()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true);

        getDatosFireStore().then(response => {
            setDatos(response);
        }).catch(error => {
            setError(error);
        }).finally(() => {
            setCargando(false);
        })

    }, dependencias)


    return {
        datos,
        cargando, 
        error,
    }
}

