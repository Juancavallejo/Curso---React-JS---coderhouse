import { useState, useEffect } from "react"

export const useCustomHooks = (obtenerDatosFireStore, dependencias = []) => {
    const [datos, setDatos] = useState()
    const [error, setError] = useState ()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true);

        obtenerDatosFireStore().then(respuesta => {
            setDatos(respuesta);
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

