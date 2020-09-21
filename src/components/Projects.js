import React from 'react'
import styled from 'styled-components'

function Projects(){
    return(
        <Wrapper>
            <HeaderText>My Projects</HeaderText>
            <ProjectsWrapper>
                <ProjectCard>
                    <ProjectName>Game of Life</ProjectName>
                    <ProjectDescrip>Description of the game of life</ProjectDescrip>
                    <ProjectButton>Github</ProjectButton>
                    <ProjectButton>Deploy</ProjectButton>
                </ProjectCard>

                <ProjectCard>
                    <ProjectName>Game of Life</ProjectName>
                    <ProjectDescrip>Description of the game of life</ProjectDescrip>
                    <ProjectButton>Github</ProjectButton>
                    <ProjectButton>Deploy</ProjectButton>
                </ProjectCard>
                
                <ProjectCard>
                    <ProjectName>Game of Life</ProjectName>
                    <ProjectDescrip>Description of the game of life</ProjectDescrip>
                    <ProjectButton>Github</ProjectButton>
                    <ProjectButton>Deploy</ProjectButton>
                </ProjectCard>
                
            </ProjectsWrapper>

        </Wrapper>
)}

const Wrapper = styled.div`
    width: 80%;
    margin: 1% 0%;
    background-color: white;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: blue;
`

const HeaderText = styled.h2`
    color: #636363;
`

const ProjectsWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`

const ProjectCard = styled.div`
    width: 25%;
    border: 1px solid gray;
    text-align: center;
    justify-content: center;
    margin: 1% 0%;
    padding: 1% 1%;
`
const ProjectTest = styled.div`
    width: 25%;
    color: blue;
    text-align: center;
    display: flex;
`

const ProjectName = styled.h3`
    color: red;
`

const ProjectDescrip = styled.p`
    color: green
`

const ProjectButton = styled.button`
    border: 1px solid purple;
`
export default Projects