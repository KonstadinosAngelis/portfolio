import React from 'react';
import styled from 'styled-components'
import tacobellMe from '../imgs/tacobellMe.png'

function Header() {
    return(
        <Wrapper>
            <img src={tacobellMe} alt="Konstadinos Angelis" width="20%" style={{borderRadius: "50%"}}/>
            <Name>Konstadinos Angelis</Name>
            <DevDescrip>Front-end engineer from Beaverton, OR.</DevDescrip>
        </Wrapper>
)}

export default Header;

const Wrapper = styled.div`
    width: 40%;
    text-align: center;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    margin: 8% 0%;
`

const Name = styled.div`
    padding: 2% 10%;
    font-size: 4rem
`

const DevDescrip = styled.div`
    font-size: 1.2rem
`