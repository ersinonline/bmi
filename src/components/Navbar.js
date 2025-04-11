import React from 'react';
import { NavContainer, NavLink } from '../styles/AppStyles';

const Navbar = () => {
  return (
    <NavContainer>
      <NavLink to="/">BMI Hesapla</NavLink>
      <NavLink to="/bmi-info">BMI Nedir?</NavLink>
    </NavContainer>
  );
};

export default Navbar; 