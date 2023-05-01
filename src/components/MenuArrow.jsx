import '../assets/styles/style.css';
import { FaUserAlt, FaClock, FaBookOpen, FaMailBulk, FaOutdent, FaKey } from 'react-icons/fa';


export const MenuArrow = ({estado}) => {
const {active} = estado;
console.log(active)
    return(
        <div className={ !active? 'view' : 'menuarrow'} >
            <div className="menuarrow_container">
                <ul className='list'>
                    <li><FaUserAlt /><a href="#">Usuario13</a></li>
                    <li><FaClock /><a href="#">Área personal</a></li>
                    <li><FaUserAlt /><a href="#">Perfil</a></li>
                    <li><FaBookOpen /><a href="#">Calificaciones</a></li>
                    <li><FaMailBulk /><a href="#">Mensajes</a></li>
                    <li><FaKey /><a href="#">Preferencias</a></li>
                    <li> <FaOutdent /><a href="#">Cerrar sesión</a></li>
                </ul>
            </div>
        </div>
    )
}