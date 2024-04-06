import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 330px;
    height: 410px;
    background-color: #33383e;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
      transform: translateY(-5px);
    }
`

const Image = styled.img`
    width: 100%;
    height: 190px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Description = styled.div`
    font-weight: 400;
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`
const ViewMoreButton = styled.button`
    background-color: #009578;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 0.5rem;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background-color: #008168;
    }
    &:active { 
      background: #006e58;
    }
`;
const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card>
            <Image src={project.image}/>
            <Details>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <ViewMoreButton onClick={() => setOpenModal({state: true, project: project})}>
                    Czytaj więcej...
                </ViewMoreButton>
            </Details>
        </Card>
    )
}

export default ProjectCards