import { useState } from 'react';
import { MenuArrow } from './MenuArrow';
import  img_logo  from '../assets/static/logoVertical.png';
import { FaConnectdevelop, FaAlgolia, FaEnvelope, FaArrowCircleDown } from 'react-icons/fa';
export const Navbar = () => {
    const style = {fontSize :'30px', color:'5af'};

    const [state, setState] =useState({
        active: false,
        change: false,
    })
    const { change, active, } = state;

    const ir = (e) => {
        setState({
          ...state,
          active: !active
        })
      }
    return(
        <div className="navbar">
            <figure className="navbar_container-img">
                <a href="/"><img src={img_logo} alt="" /></a>
            </figure>

            <div className="navbar_container-list">
                <ul className="list">
                    <li><a href="#"><FaConnectdevelop style={style} /></a></li>
                    <li><a href="#"><FaAlgolia style={style}  /></a></li>
                    <li><a href="#"><FaEnvelope style={style} /></a></li>
                    <li className='img_profile'><a href="#"><span></span></a></li>
                    <li onClick={ir} className={!active ? '' : 'rotate'} ><a className='arrow' href="#"><FaArrowCircleDown style={style} /></a></li>
                </ul>
            </div>

         <MenuArrow estado={state} />
        </div>
    )
}