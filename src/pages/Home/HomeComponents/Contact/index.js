import { SectionContainer, Text, Line1, Line2, Button, ContactButtonLink } from './ContactStyled'

const ContactBtn = () => {
    return (
        <>
            <SectionContainer>
                <Text>
                    <Line1>Need a Professional Photographer ?</Line1>
                    <Line2>Why not try our services today, you won't regret your choice !</Line2>
                </Text>
                <Button><ContactButtonLink to="/contactus">Contact Us Today</ContactButtonLink></Button>
            </SectionContainer>
        </>
    )
}

export default ContactBtn
