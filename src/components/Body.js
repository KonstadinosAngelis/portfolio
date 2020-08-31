import React from 'react'
import styled from 'styled-components'
import htmlSymbol from '../imgs/html.jpg'
import reactSmybol from '../imgs/react.jpg'
import pythonSymbol from '../imgs/python.png'
import javascriptSymbol from '../imgs/javascript.png'
import postgresSymbol from '../imgs/postgres.jpg'
import reduxSymbol from '../imgs/redux.jpg'

function Body() {
    return (
        <Wrapper>
            <LanguageHeader>Languages</LanguageHeader>
            <MySkills>
                <CodeSkill><img src={reactSmybol} width="150px" height="150px" style={{ border: "2px solid #f2f2f2", borderRadius: "100%"}} alt="React Symbol"/>React</CodeSkill>
                <CodeSkill><img src={pythonSymbol} width="150px" height="150px" style={{ border: "2px solid #f2f2f2", borderRadius: "100%" }} alt="Python Symbol"/>Python</CodeSkill>
                <CodeSkill><img src={javascriptSymbol} width="150px" height="150px" style={{ border: "2px solid #f2f2f2", borderRadius: "100%" }} alt="Javascript Symbol"/>Javascript</CodeSkill>
            </MySkills>
            <MySkills>
                <CodeSkill><img src={postgresSymbol} width="150px" height="150px" style={{ border: "2px solid #f2f2f2", borderRadius: "100%" }} alt="Postgres Symbol"/>Postgres</CodeSkill>
                <CodeSkill><img src={reduxSymbol} width="150px" height="150px" style={{ border: "2px solid #f2f2f2", borderRadius: "100%" }} alt="Redux Symbol"/>Redux</CodeSkill>
                <CodeSkill><img src={htmlSymbol} width="150px" height="150px" style={{ border: "2px solid #f2f2f2", borderRadius: "100%" }} alt="HTML Symbol"/>HTML</CodeSkill>
            </MySkills>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    border: 1px solid white;
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
    margin-bottom: 3%;
`
const CodeSkill = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    color: #636363;
    min-height: 200px;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    font-size: 20px;
`

export default Body