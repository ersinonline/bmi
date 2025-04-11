import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    padding: 10px;
    padding-bottom: 60px;
  }
`;

export const Button = styled.button`
  background-color: #ffb700;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;

  &:hover {
    background-color: #e6a500;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
    margin: 10px 0;
    width: 95%;
  }
`;

export const NavContainer = styled.nav`
  background-color: #ffffff;
  padding: 15px 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 10px 0;
    margin-bottom: 20px;
    width: 95%;
  }
`;

export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin: 0 20px;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
  white-space: nowrap;

  &:hover {
    color: #ffb700;
    background-color: rgba(255, 183, 0, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ffb700;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    margin: 0 8px;
    padding: 6px 10px;
    font-size: 14px;
  }
`;

export const Footer = styled.footer`
  background-color: #ffffff;
  padding: 15px;
  width: 95%;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px 10px 0 0;
  font-size: 14px;
  color: #666;

  a {
    color: #ffb700;
    text-decoration: none;
    font-weight: 500;
    margin-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px;
  }
`; 