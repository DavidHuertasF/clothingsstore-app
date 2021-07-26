import { Link } from "react-router-dom";
import "./Header.scss";
import { useState } from 'react';

const Header = ({ activeSidebar, user }) => {

    const [nameFilter, setNameFilter] = useState('');

    const handleSubmit = e => {
        setNameFilter(e.target.value);
    }

    return (
        <header>
            <div className='header-top_container'>
                <div className="left-header"  >
                    <button className="menu_button phone" onClick={activeSidebar} >
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <p className='logo_text'>CLOTHESSTORE</p>
                    <img className='cart_icon_p phone' src="https://drive.google.com/uc?id=17ByO510HDOzVzrnwEVT2ZofvO_u3891c" alt="" />
                </div>

                <div className="search-header">
                    <input onChange={handleSubmit} className="search_input" type="text" placeholder="Buscar aquí producto" />
                    <div className='search-image_container'>
                        <Link to={`/search/${nameFilter}`}>
                            <img className='search-image_icon' src="https://drive.google.com/uc?id=1AJ6xVS2Q-dBUTAXIImvzfMfZOH-E8m_s" alt="" />
                        </Link>
                    </div>

                </div>
                <p>{user}</p>
                <div className="right-header">
                    <img className='cart_icon' src="https://drive.google.com/uc?id=17ByO510HDOzVzrnwEVT2ZofvO_u3891c" alt="" />
                    <img className='profile_icon' src="https://drive.google.com/uc?id=1u1LLMhOdLunWOEq6AGYN9M6LjSNeO1yp" alt="" />
                    <div className="principal-light__button start-sesion_button">Iniciar sesión</div>
                </div>
            </div>
            <div className='header-down_container'>
                <p>Hombre</p>
                <p>Mujer</p>
                <p>Junior</p>
                <p>Niños</p>
                <p>Accesorios</p>
                <p>Ofertas</p>
            </div>
        </header>
    );
}

export default Header;