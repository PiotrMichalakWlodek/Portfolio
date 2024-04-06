import React from 'react'
import ProjectCard from '../../components/Projects/ProjectCard'
import { projects } from '../../configuration/constants';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 2.5rem;
    color: white;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    margin-top: 0.5rem;
`;

const Projects = ({ openModal, setOpenModal }) => {
    return (
        <Container id="projects">
            <Wrapper>
                <h1>Projekty</h1>
                <CardContainer>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects