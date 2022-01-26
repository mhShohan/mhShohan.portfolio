import React from 'react';
import styled from 'styled-components';

export default function Nav() {
    return (
        <Navbar>
            <div>
                <a href="#g">
                    <Logo>mhShohan</Logo>
                </a>
            </div>
            <Menu>
                <a href="#AboutSection">About</a>
                <a href="#h">Projects</a>
                <a href="#h">Blogs</a>
                <a href="#h">Contact</a>
            </Menu>
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const Logo = styled.h1`
    margin-left: 4rem;
    color: #77abb7;
    font-size: 32px;
    font-family: 'Mochiy Pop P One', sans-serif;
`;

const Menu = styled.div`
    margin-right: 4rem;
    a {
        color: #77abb7;
        font-size: 26px;
        padding: 0 20px;
        font-weight: 700;
    }
`;
