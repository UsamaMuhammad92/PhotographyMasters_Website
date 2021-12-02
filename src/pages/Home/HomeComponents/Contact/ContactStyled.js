import styled from 'styled-components'
import { Link } from 'react-router-dom'

// SectionContainer
export const SectionContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: #333;
margin: 2rem 0;
border-radius: 10px;
padding: 0 25px;

@media (max-width: 738px) {
    flex-direction: column;
    padding: 0;
    align-items: center;
}

margin: 3rem 0;
`

// Text
export const Text = styled.div`
background-color: #333;
`

// Text 1
export const Line1 = styled.p`
font-size: 2rem;
background-color: #333;

@media (max-width: 738px) {
    font-size: 1.5rem;
}

@media (max-width: 380px) {
    font-size: 0.8rem;
}
`

// Text 2
export const Line2 = styled.p`
background-color: #333;

@media (max-width: 738px) {
    font-size: 0.8rem;
}

@media (max-width: 738px) {
    font-size: 0.6rem;
}
`

// Button
export const Button = styled.p`
align-self: center;
background-color: #333;
`

// Button Link 
export const ContactButtonLink = styled(Link)`
justify-content: center;
padding: 0.6rem 0.8rem;
border-radius: 12px;
background-color: #ff9900;
text-transform: uppercase;
color: #fff;
font-size: 1.2rem;
text-decoration: none; 
font-weight: 1000;
letter-spacing: 1.5px;

:hover{
    background-color: #fff;
    color: #ff9900;
}

@media (max-width: 738px) {
    padding: 2px 10px;
    font-size: 14px;
    text-transform: capitalize;
}

@media (max-width: 380px) {
    font-size: 10px;
}
`