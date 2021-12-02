import { Heading, ContactContainer, Text, InputTxt, InputMsg, SubmitBtn } from './ContactUsStyled'

const ContactUs = () => {
    return ( 
        <>
        <Heading>Contact Us</Heading>
        <ContactContainer>
            <form method="" action="">
                <Text>Please fill out the form below to contact us.</Text>
               
                <label>Name</label>
                <InputTxt type="label" name="name" />
                
                <label>Email</label>
                <InputTxt type="email" name="em" />
                
                <label>Message</label>
                <InputMsg type="label" name="msg" />

                <SubmitBtn type="submit" />
            </form>
        </ContactContainer>
        </>
     );
}
 
export default ContactUs;