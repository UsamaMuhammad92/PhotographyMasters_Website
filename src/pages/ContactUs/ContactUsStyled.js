import styled from 'styled-components';

// Heading
export const Heading = styled.h1`
text-align: center;
color: #ff9900;
`

// Contact Container
export const ContactContainer = styled.div`
text-align: left;
padding: 40px 25px 0px 25px;
overflow: hidden;
margin-left: 5%;
margin-right: 5%;
margin-bottom: 2%;
`

// Form
export const Text = styled.p`
margin-bottom: 3rem;
`

export const InputTxt = styled.input`
width: 100%;
height: 30px;
margin-bottom: 3rem;
border: 1px dotted #ff9900;
`

export const InputMsg = styled.input`
width: 100%;
height: 200px;
margin-bottom: 20px;
border: 1px dotted #ff9900;
`

export const SubmitBtn = styled.input`
padding: 13px 20px;
background-color: #333;
color: #fff;
border: 1px dotted #ff9900;
letter-spacing: 1px; 
cursor: pointer;

:hover{
    background-color: #ff9900;
    color: #fff;
}
`
