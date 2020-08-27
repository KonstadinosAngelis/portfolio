import React from 'react'
import styled from 'styled-components'
import htmlSymbol from '../imgs/html.png'
import reactSmybol from '../imgs/react.png'
import pythonSymbol from '../imgs/python.png'

function Body() {
    return(
        <Wrapper>
            <NavBar>
                <NavButton>Button 1</NavButton>
                <NavButton>Button 2</NavButton>
                <NavButton>Button 3</NavButton>
                <NavButton>Button 4</NavButton>
            </NavBar>
                <LanguageHeader>Languages</LanguageHeader>
            <MySkills>
                <CodeSkill><img src = {reactSmybol} width="150px"   height="150px" style={{border: "2px solid #f2f2f2", borderRadius: "100%"}}/>Test1</CodeSkill>
                <CodeSkill><img src = {pythonSymbol}  width="150px" height="150px" style={{border: "2px solid #f2f2f2", borderRadius: "100%"}}/>Test2</CodeSkill>
                <CodeSkill><img src = {htmlSymbol}  width="150px"   height="150px" style={{border: "2px solid #f2f2f2", borderRadius: "100%"}}/>Test3</CodeSkill>            
            </MySkills>

        </Wrapper>
)}

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    border: 1px solid white;
    border-radius 5px;
`

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
    padding: 1.5% 0%;
    background-color: #F7F7F7;
    `
    
const NavButton = styled.button`
    color: black;
    padding: 0.2% 0%;
    margin: 0% 2%;
    border: 1px gray solid;
`

const MySkills = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const LanguageHeader = styled.h2`
    color: #636363;
    padding-bottom: 1%;
    border-bottom: 2px solid black;

`
const CodeSkill = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    color: #636363;
    min-height: 200px;
`

export default Body