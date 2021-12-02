import styled from 'styled-components'


//  NavbarContainer
export const NavbarContainer = styled.nav`
margin: 3rem 0;
`

//  List
export const NavMenu = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: #333;
border-radius: 8px;

@media (max-width: 738px) {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
}
`
export const MenuItem = styled.li`
list-style: none;
background-color: #333;

@media (max-width: 380px) {
    margin-bottom: 10px;
}
`

