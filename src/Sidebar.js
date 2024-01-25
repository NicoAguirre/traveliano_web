import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './Sidebar.css';
import 'typeface-inter';

const Sidebar = ({ isOpen }) => {
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className="user-profile">
        <FaUser className="user-icon" />
      <div className="user-details">
        <p>USUARIO USUARIO</p>
      </div>
    </div>
    <hr />
    <ul className="sidebar-links">
      <li><Link to="">Dashboard</Link> </li>
      <li><Link to="/Proyectos">Proyectos</Link></li>
      <li><Link to="/Calendario">Calendario</Link></li>
      <li><Link to="/Importar">Importar</Link></li>
      <li><Link to="/Reportes">Reportes</Link></li>
    </ul>
  </div>
  );
};

export default Sidebar;