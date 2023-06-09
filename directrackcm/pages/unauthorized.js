import Link from "next/link"


const UnauthorizedPage = () => {

    return(
        <>
            <h1>SIN ACCESO, DEBES SER ADMIN</h1>
            <br/>
            <Link href="/api/auth/logout">Regresar</Link>
        </>
    )

}

export default UnauthorizedPage