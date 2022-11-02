import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import circle1 from "../assets/img/circle1.png";
import { MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import {
  TiAnchor,
  TiClipboard,
  TiMessageTyping,
  TiDropbox,
  TiMessages,
  TiThLargeOutline,
  TiTabsOutline,
  TiBook,
} from "react-icons/ti";
import Navbar from "../component/Navbar";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem(
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),
];

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <TiThLargeOutline />,
  },
  {
    path: "chat",
    name: "Chat",
    icon: <TiMessageTyping />,
  },
  {
    path: "table",
    name: "Table",
    icon: <TiClipboard />,
  },
  {
    path: "form_element",
    name: "Form_Element",
    icon: <TiBook />,
  },
  {
    path: "analytics",
    name: "Analytics",
    icon: <TiAnchor />,
  },
  {
    path: "project",
    name: "Project",
    icon: <TiTabsOutline />,
  },
  {
    path: "chart",
    name: "Chart",
    icon: <TiMessages />,
  },
  {
    path: "calender",
    name: "Calender",
    icon: <TiDropbox />,
  },
];

const Sidebar = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };

  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "260px" : "78px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 11,
          },
        }}
        className="sidebar"
      >
        <div className="bars text-sm-start">
          <FaBars onClick={toggle} />
        </div>
        <div className="top_section">
          {isOpen && (
            <motion.div
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="logo text-center"
            >
              <img src={circle1} width="100%" alt="" />
              <h3 className="text-white">JhoneDoe</h3>
            </motion.div>
          )}
        </div>

        <section className="routes">
          {routes.map((route) => (
            <NavLink
              activeClassName="active"
              to={route.path}
              key={route.name}
              className="link"
            >
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
          {/* <Menu onClick={onClick} mode="inline" items={items} /> */}
        </section>
      </motion.div>
      <main>
        <Navbar />
        {Outlet({})}
      </main>
    </div>
  );
};

export default Sidebar;
