import styled from 'styled-components';


// HeaderContainer
export const HeaderContainer = styled.header`
display: grid;
grid-template-columns: 1fr 1fr;
margin-bottom: 3rem;

@media (max-width: 738px) {
    grid-template-columns: 1fr;
    text-align: center;    
}
`

// Logo
export const Logo = styled.h1`
text-transform: uppercase;
`

export const Logo_BigFont = styled.span`
margin: 0;
letter-spacing: 2px;
font-size: 2rem;
color: #ff9900;

@media (max-width: 380px) {
    font-size: 1.2rem;
}
`

export const Logo_SmallFont = styled.span`
margin: 0;
letter-spacing: 2px;
font-size: 1rem;

@media (max-width: 380px) {
    font-size: 0.7rem;
}
`

export const Subtitle = styled.p`
text-transform: lowercase;
font-size: 0.6rem;
letter-spacing: 2px;
line-height: 0.5;
margin: 1px;

@media (max-width: 380px) {
    display: none;
}
`

//  Contact
export const Contact = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;

@media (max-width: 738px) {
    align-items: center;
}
`

export const ContactInfo = styled.p`
color: #ccc;
font-size: 0.9rem;
letter-spacing: 1.5px;
margin: 1px;

@media (max-width: 380px) {
    font-size: 0.7rem;
}
`