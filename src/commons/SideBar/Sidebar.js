import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { arrDetail } from "../../data/dataSidebar";

export function CustomSidebar(props) {
  return (
    <>
      {props.title.map((parent, index) => (
        <div className="sidebar-detail" key={index}>
          <NavLink to={parent.title} className="sidebar-male-title">
            {parent.title}
          </NavLink>
          <ul className="sidebar-child">
            {parent.children.map((_, index) => (
              <li className="sidebar-child-name" key={index}>
                <NavLink to={_.path}>
                  <p className="name">{_.name}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function Sidebar() {
  const [sidebarDetail, setSidebarDitail] = useState([]);

  const handleDetailMount = (e) => {
    setSidebarDitail(arrDetail[e].children);
    document.querySelector(".sidebar-detial").style.display = "block";
  };

  const handleDetailMountDetail = () => {
    document.querySelector(".sidebar-detial").style.display = "block";
  };

  const handleDetailUnmount = () => {
    document.querySelector(".sidebar-detial").style.display = "none";
  };

  return (
    <div className="sidebar">
      <div className="sidebar-infor">
        <div className="sidebar-title">
          {arrDetail.map((e, index) => (
            <div className="title-hover" key={index}>
              <p
                id={index}
                onMouseOut={() => handleDetailUnmount()}
                onMouseOver={(e) => handleDetailMount(e.target.id)}
              >
                {e.title}
              </p>
              <div className="active"></div>
            </div>
          ))}
        </div>
        <div
          onMouseOver={() => handleDetailMountDetail()}
          onMouseOut={() => handleDetailUnmount()}
          className="sidebar-detial"
        >
          <div className="detail">
            <ul className="sidebar-fixed-infor">
              {sidebarDetail.map((_, index) => (
                <li className="sidebar-name-padding " key={index}>
                  <NavLink to={_.path}>
                    <p className="name">{_.name}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="siderbar-img">
              <img
                src="https://media.canifa.com/catalog/category/Nu__744x350.webp"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
