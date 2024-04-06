import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    text-align: justify;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 10px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #6b7783;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Subtitle = styled.div`
    font-size: 14px;
    font-weight: 500;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const InfoCard = ({ info }) => {
    return (
        <Card>
            <Top>
                <Image src={info.img} />
                <Body>
                    <Title>{info.title}</Title>
                    <Subtitle>{info.subtitle}</Subtitle>
                    <Date>{info.date}</Date>
                </Body>
            </Top>
            <Description>
                {info?.desc &&
                    <Span>{info?.desc}</Span>
                }
            </Description>
            {info.doc &&
                <a href={info.doc} target="new">
                    <Document src={info.doc} />
                </a>
            }
        </Card>
    )
}

export default InfoCard