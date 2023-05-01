import { FaListUl, FaHome, FaClock, FaCalendarAlt, FaCertificate,FaGraduationCap, FaArchive } from 'react-icons/fa';


export const LatearlMenu = () => {
    const style = {fontSize :'30px', color:'white'};
    return(
        <div className="lateralmenu">
            <div className="lateralmenu_container">
                <div className="icon_hamburguer">
                    <li><a href=""><a href=""><FaListUl style={style} /></a></a></li>
                </div>
                <ul className="lateralmenu_list">
                    <li><a href=""><FaHome style={style}/></a></li>
                    <li><a href=""><FaClock style={style}/></a></li>
                    <li><a href=""><FaCalendarAlt style={style} /></a></li>
                    <li><a href=""><FaCertificate style={style} /></a></li>
                    <li><a href=""><FaArchive style={style} /></a></li>
                    <li><a href=""><FaGraduationCap style={style} /></a></li>
                </ul>
            </div>

        </div>
    )
}