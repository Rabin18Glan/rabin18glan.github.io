import { ContactContainer, ContactForm, ContactInfo } from '../../features/contact';
import { PageWrapper } from '../../layouts/wrappers';

function Contacts() {
    return (
        <PageWrapper id='contact' title={'Contact'} >
            <ContactContainer>
                <ContactInfo />
                <ContactForm />
            </ContactContainer>
        </PageWrapper>
    )
}

export default Contacts
