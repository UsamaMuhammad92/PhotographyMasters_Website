import styled from 'styled-components'

// WorkServicesContainer
export const WorkServicesContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

@media (max-width: 738px) {
    grid-template-columns: 1fr;
}
margin: 3rem 0;
`

// Work
export const Work = styled.div`
`

export const Heading = styled.h2`
text-align: center;
letter-spacing: 2px;
margin-bottom: 1cm;
`

// Images
export const ImagesConatainer = styled.div`
display: grid;
grid-template-columns: 2fr 2fr;
justify-items: center;

@media (max-width: 310px) {
    grid-template-columns: 1fr;
}
`

export const Image = styled.img`
height: 100px;
width: 100px;
border-radius: 55px;
border: 1.5px solid #ff9900;
transition: transform .3s;

:hover{
    transform: scale(2);
}

@media (max-width: 400px) {
    :hover{
    transform: scale(1.5);
}
} 
`

// Services
export const Services = styled.div`
`
export const Features = styled.div`
display: grid;
grid-template-columns: 2fr 2fr;
justify-items: center;

@media (max-width: 310px) {
    grid-template-columns: 1fr;
}
`

export const FeatureInfo = styled.div`
text-align: center;
height: 100px;
width: 100px;
border-radius: 55px;
border: 1.5px solid #ff9900;
transition: transform .3s;
background-color: #292929;

:hover{
    transform: scale(2);
}

@media (max-width: 400px) {
    :hover{
    transform: scale(1.5);
}
}
`

export const FeatureHeading = styled.h6`
margin: 10px 20px;
background-color: #292929;
`

export const FeatureDescription = styled.p`
font-size: .6rem;
background-color: #292929;
`