
import React from 'react';
import { FaBars } from 'react-icons/fa'; // Importa el ícono de barras
import { FaUser } from 'react-icons/fa'; // Importa el ícono de usuario
import './Navbar.css';

const Navbar = ({ toggleSidebar, isNavbarExpanded }) => {
  return (
    <div className={`navbar ${isNavbarExpanded ? 'expanded' : ''}`}>
      <div className="navbar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className="user-profile-navbar">
        <FaUser className="user-icon" />
        <div className="user-details">
          <p>USUARIO USUARIO</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;