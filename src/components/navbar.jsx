import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import '../assets/css/componentes.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Almy</div>

      {/* Botón hamburguesa (solo en móvil) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Links en pantallas grandes */}
      <ul className="nav-links">
        {['Home', 'About Us', 'Projects', 'Contact'].map((item, index) => (
          <li key={index} className="nav-item">
            <NavLink to={item.toLowerCase().replace(' ', '-')} className="nav-link">
              <FiArrowUpRight className="arrow-icon" />
              <span className="link-text">{item}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Iconos de redes */}
      <div className="nav-icons">
        <FaInstagram />
        <FaGithub />
        <FaLinkedin />
      </div>

      {/* Menú móvil lateral */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {['Home', 'About Us', 'Projects', 'Contact'].map((item, index) => (
            <li key={index}>
              <NavLink 
                to={item.toLowerCase().replace(' ', '-')} 
                className="nav-link" 
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
