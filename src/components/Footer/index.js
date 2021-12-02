import React from 'react'
import { FooterContainer, WebsiteRights, SocialIcons, IconLink } from './FooterStyled'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <WebsiteRights>
                    Copyright &copy; {new Date().getFullYear()} All Rights Reserved.
                </WebsiteRights>
                <SocialIcons>
                    <IconLink href="#"><i class="fab fa-whatsapp"></i></IconLink>
                    <IconLink href="#"><i class="fab fa-twitter"></i></IconLink>
                    <IconLink href="#"><i class="fab fa-facebook-f"></i></IconLink>
                    <IconLink href="#"><i class="fab fa-instagram"></i></IconLink>
                </SocialIcons>
            </FooterContainer>          
        </>
    )
}

export default Footer
