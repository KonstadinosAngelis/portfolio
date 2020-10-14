import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return(
        <Wrapper>
            <FooterText> </FooterText>
        </Wrapper>
)}

const Wrapper = styled.footer`
    width: 80%;
    background-color: white; 
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const FooterDec = styled.div`
    width: 100%;
    display: flex;
    color: black; 
    border: 0px solid gray;
`

const FooterText = styled.h2`
    color: #636363;
`

export default Footer
