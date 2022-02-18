import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <Navbar>
      <div>
        <Link to="/">
          <Logo>mhShohaN</Logo>
        </Link>
      </div>
      <Menu>
        <Link to="/">Home</Link>
        <a href="#AboutSection">About</a>
        <a href="#projectSection">Projects</a>
        <a href="#blogSection">Blogs</a>
        <a href="#ContactSection">Contact</a>
      </Menu>
      <HumbergarMenu>
        <MenuIcon sx={{ fontSize: 50 }} />
      </HumbergarMenu>
    </Navbar>
  );
}

const Navbar = styled.nav`
  background: #142850;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100230;
`;

const Logo = styled.h1`
  margin-left: 4rem;
  color: #77abb7;
  font-size: 32px;
  font-family: 'Mochiy Pop P One', sans-serif;

  @media (max-width: 900px) {
    margin-left: 10px;
    font-size: 22px;
  }
`;

const Menu = styled.div`
  margin-right: 4rem;

  a {
    color: #77abb7;
    font-size: 26px;
    padding: 0 20px;
    font-weight: 700;
  }
  @media (max-width: 900px) {
    a {
      display: none;
    }
  }
`;

const HumbergarMenu = styled.div`
  color: #77abb7;
  display: none;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;
