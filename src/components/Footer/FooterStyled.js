import styled  from 'styled-components'

// FooterContainer

export const FooterContainer = styled.footer`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 1.8rem;
margin-bottom: 0;
padding-bottom: 0;
border-top: 1.5px solid #333;
border-bottom: 1.5px solid #333;

@media (max-width: 738px) {
    flex-direction: column;
     align-items: center;
}
`

// WebsiteRights


export const WebsiteRights = styled.p`
align-self: center;

@media (max-width: 380px) {    
    font-size: 0.6rem;
}
`

// SocialIcons

export const SocialIcons = styled.div`
`

export const IconLink = styled.a`
margin: 0;
`