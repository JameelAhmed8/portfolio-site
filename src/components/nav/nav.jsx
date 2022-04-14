import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import { SiGitbook } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <RiUserLine />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <SiGitbook />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <MdMiscellaneousServices />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <FiMessageCircle />
        </a>
      </nav>
    </div>
  );
}

export default Nav;
