import React from 'react';
import TopPageTitle from '../../shared-components/TopPageTitle';
import ContactForm from '../../pages/contact/ContactForm';
import Footer from '../../shared-components/Footer';
import BackToTop from '../../shared-components/BackToTop';
import '../../../assets/styles/contact.css';

function Contact() {
	const title = 'Liên hệ câu lạc bộ',
		link = 'Trang chủ',
		linkActive = 'Liên hệ'

	return (
		<>
			<TopPageTitle title={title} link={link} linkActive={linkActive} />
			<ContactForm />
			<Footer />
            <BackToTop />
		</>
	)
}

export default Contact
