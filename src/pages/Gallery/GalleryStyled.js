import styled from 'styled-components';

// Heading
export const Heading = styled.h1`
text-align: center;
color: #ff9900;
margin-bottom: 2rem;
`

// Gallery Container
export const GalleryContainer = styled.div`
justify-items: center;
display: grid;
grid-template-columns: repeat(3, 1fr);

@media (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
}

@media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
}
`
// Image
export const Image = styled.img`
height: 200px;
width: 200px;
border-radius: 50px;
border: 3px solid #ff9900;
transition: transform .3s;

:hover{
    transform: scale(1.5);
}

@media (max-width: 780px) {
    :hover{
    transform: scale(1.3);
}

@media (max-width: 270px) {
    height: 100px;
    width: 100px;

    :hover{
    transform: scale(1.3);
}
}
}
`
