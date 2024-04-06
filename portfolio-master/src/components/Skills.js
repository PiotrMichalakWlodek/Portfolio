import React from 'react';
import styled from 'styled-components';
import { mySkills } from '../configuration/constants';

const Section = styled.section`
  max-width: 60rem;
  margin: auto;
  text-align: center;
  margin-top: 2.5rem;
  color: white;
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SkillSet = styled.div`
  padding: 1rem;
  flex: 0 1 calc(25% - 2rem);

  @media (max-width: 1024px) {
    flex: 0 1 calc(33.33% - 1rem);
  }

  @media (max-width: 768px) {
    flex: 0 1 calc(25% - 1rem);
  }

  @media (max-width: 480px) {
    flex: 0 1 calc(25% - 0.5rem);
  }
`;

const Icon = styled.img`
  width: 75%;
  max-width: 7rem;
  height: auto;
  padding: 0.7rem;
  background-color: #33383e;
  border-radius: 11px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  margin: 8px;
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const SkillName = styled.p`
  color: white;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (max-width: 414px) {
    font-size: 0.7rem;
  }
  
  @media (max-width: 390px) {
    font-size: 0.6rem;
  }

  @media (max-width: 375px) {
    font-size: 0.6rem;
  }
`;
const Skills = () => {
    return (
        <Section className="skills" id="skills">
            <h1>Skills</h1>
            <SkillsWrapper>
                {mySkills.map((skill, index) => (
                    <SkillSet key={index}>
                        <Icon src={skill.src} alt={skill.alt} loading="lazy" />
                        <SkillName>{skill.name}</SkillName>
                    </SkillSet>
                ))}
            </SkillsWrapper>
        </Section>
    );
};

export default Skills;
