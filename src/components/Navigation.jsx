import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Spin from 'react-reveal/Spin';

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <>
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
        <HumbergarMenu onClick={() => setShow(true)}>
          <MenuIcon sx={{ fontSize: 40 }} />
        </HumbergarMenu>
      </Navbar>
      {show && (
        <MobileMenu>
          <div>
            <Slide left>
              <Link to="/" onClick={() => setShow(false)}>
                Home
              </Link>
            </Slide>
            <Slide right>
              <a href="#AboutSection" onClick={() => setShow(false)}>
                About
              </a>
            </Slide>
            <Slide left>
              <a href="#projectSection" onClick={() => setShow(false)}>
                Projects
              </a>
            </Slide>
            <Slide right>
              <a href="#blogSection" onClick={() => setShow(false)}>
                Blogs
              </a>
            </Slide>
            <Slide bottom>
              <a href="#ContactSection" onClick={() => setShow(false)}>
                Contact
              </a>
            </Slide>
            <Spin>
              <span onClick={() => setShow(false)}>X</span>
            </Spin>
          </div>
        </MobileMenu>
      )}
    </>
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
  z-index: 100;
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

const MobileMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 101;
  transition: all ease 300ms;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      position: absolute;
      color: #77abb7;
      top: 20px;
      right: 30px;
      font-size: 32px;
      font-weight: 600;
      cursor: pointer;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1) 300ms;

      &:hover {
        color: #fff;
      }
    }

    a {
      color: #77abb7;
      padding-bottom: 10px;
      font-size: 32px;
      font-weight: 600;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1) 300ms;

      &:hover {
        color: #fff;
      }
    }
  }
`;
