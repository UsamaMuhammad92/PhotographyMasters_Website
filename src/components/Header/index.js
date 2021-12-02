import React from 'react'
import { HeaderContainer, Logo, Logo_BigFont, Logo_SmallFont, Subtitle, Contact, ContactInfo} from './HeaderStyled'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Logo>
                        {/* eslint-disable-next-line */}
                        <Logo_BigFont>P</Logo_BigFont><Logo_SmallFont>hotography</Logo_SmallFont>
                        {/* eslint-disable-next-line */}
                        <Logo_BigFont>M</Logo_BigFont><Logo_SmallFont>asters</Logo_SmallFont>
                        <Subtitle><i>hire professional photographers</i></Subtitle>
                    </Logo>
                </Link>
                <Contact>
                    <ContactInfo>Tel: 21342 68032156</ContactInfo>
                    <ContactInfo>Mail: info@domain.com</ContactInfo>
                </Contact>
            </HeaderContainer>
        </>
    )
}

export default Header
