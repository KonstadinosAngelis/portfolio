import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'

function Navbar(props){
    const [stick, setStick] = useState(false);

    //useRef is called on page load to grab the offsetTop of the navbar. Which will be used to determine whether or not it should be sticky. 
    const inputRef = useRef()
    useEffect(() => {
        const { offsetTop } = inputRef.current
        window.addEventListener('scroll', () => {
            window.pageYOffset > offsetTop ? setStick(true) : setStick(false)
        })
    }, [])
    
    return(
    <NavBar ref={inputRef} stick={stick}>
        <NavButton>Languages</NavButton>
        <NavButton>Projects</NavButton>
        <NavButton>About Me</NavButton>
        <NavButton>Contact Me</NavButton>
    </NavBar>
)}

const NavBar = styled.nav`
    width: 80%;
    display: flex;
    justify-content: center;
    border: 1px solid white;
    border-radius: 5px 5px 0px 0px;
    padding: 1.5% 0%;
    background-color: #F7F7F7;
    position: ${props => props.stick ? "fixed" : "relative"};
`

const NavButton = styled.button`
    color: black;
    padding: 0.2% 2%;
    margin: 0% 2%;
    border: 0px gray solid;
    border-radius: 6px;

    &:hover {
        background-color: gainsboro;
        text-decoration: underline;
    }
`

export default Navbar