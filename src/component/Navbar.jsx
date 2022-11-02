import React from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Space } from "antd";
import circle1 from "../assets/img/circle1.png";
import logo from "../assets/img/logo.png";
import {
  TiBell,
  TiMessageTyping,
  TiBusinessCard,
  TiCloudStorageOutline,
  TiCog,
  TiCalendar,
  
} from "react-icons/ti";
import {FaServicestack,FaSignInAlt,
FaAdn,
} from "react-icons/fa"
import { Link } from "react-router-dom";


const Navbar = () => {
  const menu = (
    <Menu
      items={[
        {
          label: (
          <Link  className="menu-link" to="profile">
              <TiBusinessCard />
              Profile
            </Link>
          ),
        },
        {
          type: "divider",
        },
        {
          label: (
            <a target="_blank" className="menu-link" href="#">
              <TiCog />
              Settings
            </a>
          ),
        },
        {
          type: "divider",
        },
        {
          label: (
            <a target="_blank" className="menu-link" href="#">
              <TiCloudStorageOutline /> LogOut
            </a>
          ),
        },
      ]}
    />
  );

  const notification = (
    <Menu
    
      items={[

        {
          label: (
            <a target="_blank" className="menu-link " href="#">
              <TiCalendar className="text-success" />
              Event today
            </a>
          ),
        },
        {
          type: "divider",
        },
        {
          label: (
            <a target="_blank" className="menu-link" href="#">
              <TiCog className="text-danger" />
              Settings
            </a>
          ),
        },
        {
          type: "divider",
        },
        {
          label: (
            <a target="_blank" className="menu-link" href="#">
              <FaAdn className="text-warning" /> Launch Admin
            </a>
          ),
        },
      ]}
    />
  );
  const typing = (
    <Menu
    
      items={[

        {
          label: (
            <a target="_blank" className="menu-link" href="#">
              <img src={circle1} width="15%" />
              Mark send you a message
            </a>
          ),
        },
        {
          type: "divider",
        },
        {
          label: (
            
            <a target="_blank" className="menu-link" href="#">
              <img src={circle1} width="15%" />
             <span> Cregh send you a message</span>
            </a>
          ),
        },
        {
          type: "divider",
        },
        {
          label: (
            <a target="_blank" className="menu-link" href="#">
             <img src={circle1} width="15%" />
              Profile picture updated
            </a>
          ),
        },
        {
          type: "divider",
        },
        {
          label: (
            <a target="_blank" className="menu-link text-center" href="#">
              4 new message
            </a>
          ),
        },
      ]}
    />
  );


  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <div class="d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={logo} width="76%" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              padding: "13px 20px 11px 20px",
            }}
          /> */}
        </div>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav col-12 d-flex flex-row-reverse">
            <li className="nav-item">
              <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <img src={circle1} />
                  </Space>Amit kumar
                </a>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown overlay={notification}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                  <TiBell />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown overlay={typing}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                  <TiMessageTyping />
                  </Space>
                </a>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
