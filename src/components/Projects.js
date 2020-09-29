import React from 'react'
import styled from 'styled-components'
import gameOfLife from '../imgs/gameOfLife.png'
import SFMTA from '../imgs/SFMTA.png'
import potluckPlanner from '../imgs/potluckPlanner.png'

function Projects(){
    return(
        <Wrapper>
            <HeaderText>My Projects</HeaderText>
            <ProjectsWrapper>
                <ProjectCard>
                    <ProjectImg src={SFMTA}/>
                    <ProjectDescrip>A web app created to help agency members identify problems with San Franciscos public transportation</ProjectDescrip>
                    <ButtonWrapper>
                        <ProjectButton formAction="https://github.com/Lambda-School-Labs/sfmta-data-analysis-fe">Github</ProjectButton>
                        <ProjectButton>Deploy</ProjectButton>
                    </ButtonWrapper>
                </ProjectCard>

                <ProjectCard>
                    <ProjectImg src={gameOfLife}/> 
                    <ProjectDescrip>A faithful recreation of the computer science classic Conway's game of life. </ProjectDescrip>
                    <ButtonWrapper>
                        <ProjectButton formAction="https://github.com/KonstadinosAngelis/game-of-life">Github</ProjectButton>
                        <ProjectButton>Deploy</ProjectButton>
                    </ButtonWrapper>
                </ProjectCard>
                
                <ProjectCard>
                    <ProjectImg src={potluckPlanner}/> 
                    <ProjectDescrip>A backend designed to supply user inputted data to organize potlucks</ProjectDescrip>
                    <ButtonWrapper>
                        <ProjectButton formAction="https://github.com/PotluckPlanner-devin/Node-API">Github</ProjectButton>
                        <ProjectButton formAction="https://potluckplanner-buildweek.herokuapp.com/">Deploy</ProjectButton>
                    </ButtonWrapper>
                </ProjectCard>
            </ProjectsWrapper>
        </Wrapper>
)}

const Wrapper = styled.div`
    width: 80%;
    background-color: white;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding-bottom: 2%;
`

const HeaderText = styled.h2`
    color: #636363;
    padding: 2% 0%;
`

const ProjectsWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`

const ProjectCard = styled.div`
    width: 28%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid lightgray;
    border-radius: 15px;
    text-align: center;
    margin: 1% 0%;
    padding: 4% 1%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 4px 8px 16px 0 rgba(0,0,0,0.2);
    }
`

const ProjectImg = styled.img`
    width: 250px;
    display: block;
    margin: auto;
`

const ProjectDescrip = styled.p`
    color: black;
`

const ButtonWrapper = styled.form`
`

const ProjectButton = styled.button`
    border: 0px solid gray;
    margin: 0% 4%;
    padding: 2% 4%;
    background-color: white-smoke;
    border-radius: 6px;

    &:hover {
        background-color: gainsboro;
        text-decoration: underline;
    }
`
export default Projects