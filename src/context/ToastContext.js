import { createContext, useState } from "react";

const Toast = ({ mensaje, color, other}) => {
    const background = {
        success: '#198754',
        error: '#dc3545',
    }

    const toastStyles = {
        position: 'absolute',
        top: 200,
        right: 10,
        padding: '10px 20px 10px 20px',
        backgroundColor: background[color], 
        color: 'white',
    }

    if(mensaje === '') return

    return (
        <div style={toastStyles} className={`rounded-pill border`}>
          {mensaje}
        </div>
      )

}

const ToastContext = createContext()

export const ToastContextProvider = ({children}) => {
    const [mensaje, setMensaje] = useState('')
    const [color, setColor] = useState ('success')

    const setToast = (msj, clr) => {
        setMensaje (msj)
        setColor (clr)
        setTimeout (() => {
            setMensaje ('')
        }, 5000)
    }

    return (
        <ToastContext.Provider value={{setToast}}>
            <Toast mensaje={mensaje} color={color} />
                {children} 
        </ToastContext.Provider>
    )
}

export default ToastContext