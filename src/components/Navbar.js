import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

function Navbar(){
    return(
    <NavBar>
        <NavButton>Languages</NavButton>
        <NavButton>Projects</NavButton>
        <NavButton>About Me</NavButton>
        <NavButton>Contact Me</NavButton>
    </NavBar>      
)}

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    width: 80%;
    border: 1px solid white;
    border-radius: 5px 5px 0px 0px;
    padding: 1.5% 0%;
    background-color: #F7F7F7;
    position: relative;
`

const NavButton = styled.button`
    color: black;
    padding: 0.2% 2%;
    margin: 0% 2%;
    border: 0px gray solid;
    border-radius: 6px;
`

export default Navbar