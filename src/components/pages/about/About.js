import React from 'react';
import TopPageTitle from '../../shared-components/TopPageTitle';
import Introduction from './Introduction';
import WhyChoose from './WhyChoose';
import CounterContainer from './CounterContainer';
import Testimonial from '../../shared-components/Testimonial';
import Students from './Students';
import Footer from '../../shared-components/Footer';
import BackToTop from '../../shared-components/BackToTop';
import '../../../assets/styles/about.css';

function About() {
  return (
    <div>
      <TopPageTitle title={'Giới thiệu'} link={'Trang chủ'} linkActive={'Giới thiệu'} />
      <Introduction />
      <CounterContainer />
      <WhyChoose />
      <Testimonial />
      <Students />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default About;
