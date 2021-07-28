import './Footer.scss'

const Footer = () => {
    return (
        <div>
            <div className='footer-principal_container'>
                <div className='footer-row_container'>
                    <p className="title">POLÍTICAS <b className='phone plus' >+</b> </p>
                    <p className="link">Políticas de privacidad</p>
                    <p className="link">Políticas de cambio</p>
                    <p className="link">Políticas de envío</p>
                    <p className="link">Términos y condiciones</p>
                    <p className="link">Responsabilidad social</p>
                </div>
                <div className='footer-row_container'>
                    <p className="title">SOBRE NOSOTROS<b className='phone plus' >+</b> </p>
                    <p className="link">Encuentra tu tienda</p>
                    <p className="link">Contáctanos</p>
                    <p className="link">Trabaja con nosotros</p>
                </div>
                <div className='footer-row_container phone'>
                    <p className="title">MEDIOS DE PAGO<b className=' plus' >+</b> </p>
                </div>
                <div className='footer-row_container'>
                    <p className="title follow">SÍGUENOS EN:</p>
                    <div className="icons_container">
                        <img src="https://drive.google.com/uc?id=1hENgmF7Mt0iXt0yycNEfYYu0u2xkcQD7" alt="" />
                        <img src="https://drive.google.com/uc?id=1zgCRVBE39NCk4NRa4tE01ZBPwd5PlDKv" alt="" />
                        <img src="https://drive.google.com/uc?id=118NdzlM-MSZdMXuWMIRzcV7hCPqC8eWT" alt="" />
                        <img src="https://drive.google.com/uc?id=15AGtiJJSWeH5UF2LDcbXEIqLLjyfP0zW" alt="" />
                    </div>
                </div>
            </div>
            <div className='copy-r_container' >
                <p className='copy-r' >© Copyright Colombia. Todos los derechos reservados</p>
            </div>
        </div>
    );
}

export default Footer;