import React, { useEffect } from 'react';
import styled from 'styled-components';
import WeatherComponent from '../WeatherComponent';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  background-color: #495159;
  padding: 15px;
  z-index: 1200;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 600px) {
    max-width: 350px;
    padding: 5px;
  }

  @media (max-width: 375px) {
    max-width: 400px;
    padding: 5px;
  }
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: white;
  font-size: 1.9rem;
  cursor: pointer;
  margin-top: -0.9rem;
  margin-right: 0.5rem;
  @media (max-width: 375px) {
    margin-top: -0.6rem;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-top: -1rem;
  height: auto;
  max-height: 400px;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 600px) {
    max-height: 200px;
  }

  @media (max-width: 375px) {
    max-height: 170px;
  }
`;

const Title = styled.h2`
  margin-bottom: -1.5rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
    margin-bottom: -1.1rem;
  }
`;

const Description = styled.p`
  text-align: justify;
  padding: 1.5rem;

  @media (max-width: 600px) {
    padding: 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 375px) {
    padding: 0.8rem;
    font-size: 0.8rem;
  }
`;
const Single = ({ openModal, setOpenModal }) => {
    const { project } = openModal;
    useEffect(() => {
        document.body.style.overflow = openModal.state ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openModal.state]);

    return (
        <>
        <Overlay onClick={() => setOpenModal({ state: false, project: null })}></Overlay>
        <Popup>
            <CloseButton onClick={() => setOpenModal({ state: false, project: null })}>&times;</CloseButton>
            <Image src={project.image} alt={project.title} />
            <Title>{project.title}</Title>
            <Description>{project.description}</Description>
            {project.title === "Weather API" && (
                <WeatherComponent/>
            )}
        </Popup>
        </>
    );
};

export default Single;
