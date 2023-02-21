import {React, useState} from "react";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import logo from '../Images/logo.svg';

const Menu = [
  {
    title: "Home",
    path: "/herdsman/home",
    icon: <Icon.HouseFill />,
  },
  {
    title: "Profile",
    path: "/herdsman/profile",
    icon: <Icon.PersonFill />,
  },
  {
    title: "Settings",
    path: "/herdsman/settings",
    icon: <Icon.GearFill />,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <Icon.ArrowLeft />,
    action: function logout() {
      sessionStorage.clear(); window.location.reload();
    }
  },
]

const Sidebar = () => {

  const [open, setopen] = useState(true);

    return (
      <div className={`sidebar ${open ? "w-60": "w-20" } duration-300 bg-gray h-[100vh]` }>
        <div className="top flex gap-2"><Icon.ArrowLeftShort onClick={()=>{setopen(!open)}} className={`menutoggle  ${!open && 'rotate-180 mr-5' }`}/>
          <div className={`h-[80px] w-[100px] pl-3 m-auto`}><img className="h-[80px] w-[100px]" src={logo}/></div>
        </div>
        <div className="center mt-8">
          <ul>
            {Menu.map((item,index)=>{
              return <li><NavLink activeClassName="active"  onClick={item.action} className="nav-items" key={index} to={item.path} style={{textDecoration:"none"}} ><span className="icon">{item.icon}</span><span className={`${open ? "": "scale-0" } text-gray-200 `}>{item.title}</span></NavLink></li>
            })}
          </ul>
        </div>
        <div className="bottom">
          {/* <div className="coloroption"></div>
          <div className="coloroption"></div> */}
        </div>
      </div>
    ); 
}

export default Sidebar;
