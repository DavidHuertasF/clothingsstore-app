import { Link } from "react-router-dom";
// import { AiOutlineClose } from 'react-icons/ai';
import "./SideBar.scss";
import { HeaderData } from '../HeaderData';

const SideBar = ({ active, activeSidebar }) => {
    let isactive = active;
    return (
        <>
            <nav className={isactive ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" >
                    <li className="navbar-toggle" onClick={activeSidebar}>
                        <img src="https://drive.google.com/uc?id=1j_Px785e9d7gQLHq_KTowHB7w5I6YtHF" alt="" />
                    </li>

                    {HeaderData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
}

export default SideBar;
