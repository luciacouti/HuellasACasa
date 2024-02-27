import {useRouteError} from 'react-router-dom'
import './Error404.css'

function Error404(){

    const error = useRouteError() // puedes obtener el error por cual se ejecuto esta pagina

    console.log(error)

    return (
        <div className="error-404-page">
            <h1>Ups</h1>
            <p >Ocurrio un problema</p>
            <p className='errro-404-message'>{'Pagina no encontrada'}</p>
        </div>
    )
}

export default Error404