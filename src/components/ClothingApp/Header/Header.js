import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import SideBar from './Sidebar/SideBar'
import "./Header.scss";
import { HeaderData } from "./HeaderData.js";


import { useState } from 'react';

const Header = ({ user, products }) => {

    const [nameFilter, setNameFilter] = useState('');
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const handleSubmit = e => {
        setNameFilter(e.target.value);
    }

    return (
        <>
            <header>
                <div className='header-top_container'>
                    <div className="left-header"  >
                        <button className="menu_button phone" onClick={showSidebar} >
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                        <Link to={`/`}>
                            <p className='logo_text'>CLOTHESSTORE</p>
                            
                        </Link>
                        <Link to={`/cart`}>
                            <img className='cart_icon_p phone' src="https://drive.google.com/uc?id=17ByO510HDOzVzrnwEVT2ZofvO_u3891c" alt="" />
                            <div className='phone cart-number' >{products.length}</div>
                        </Link>

                    </div>

                    <div className="search-header">
                        <input onChange={handleSubmit} className="search_input" type="text" placeholder="Buscar aquí producto" />
                        <Link to={`/search/${nameFilter}`}>
                            <div className='search-image_container'>
                                <img className='search-image_icon' src="https://drive.google.com/uc?id=1AJ6xVS2Q-dBUTAXIImvzfMfZOH-E8m_s" alt="" />
                            </div>
                        </Link>

                    </div>
                    <p>{user}</p>
                    <div className="right-header">
                        <Link to={`/cart`}>
                            <img className='cart_icon' src="https://drive.google.com/uc?id=17ByO510HDOzVzrnwEVT2ZofvO_u3891c" alt="" />
                            <div className='cart-number desktop' >{products.length}</div>
                        </Link>
                        <img className='profile_icon' src="https://drive.google.com/uc?id=1u1LLMhOdLunWOEq6AGYN9M6LjSNeO1yp" alt="" />
                        <div className="principal-light__button start-sesion_button">Iniciar sesión</div>
                    </div>
                </div>
                <div className='header-down_container'>
                    {HeaderData.map((item, index) => {
                        return (
                            <Link to={item.path}>
                                <p key={index} className={item.cName}>
                                    {item.title}
                                </p>
                            </Link>

                        )
                    })}
                </div>
            </header>

            <SideBar
                key='2'
                active={sidebar}
                activeSidebar={showSidebar}
            />
        </>
    );
}

const mapStateToProps = state => ({
    products: state.cartProducts,
});

export default connect(mapStateToProps)(Header);