import React from 'react';
import '../../../assets/styles/App.css';
import '../../../assets/styles/features.css';
import Slider from './Slider';
import KeyFeatures from './KeyFeatures';
import Counters from './Counters';
import WhyChoose from './WhyChoose';
import Testimonial from '../../shared-components/Testimonial';
import Students from '../about/Students';
import Events from './Events';
import MainPageBlog from './MainPageBlog';
import MainPageWorkshop from './MainPageWorkshop';
import About from './About';
import Footer from '../../shared-components/Footer';
import BackToTop from '../../shared-components/BackToTop';

function MainPage() {
  return (
    <div>
      <Slider />
      <KeyFeatures />
      <About />
      <Counters />
      <WhyChoose />
      <MainPageWorkshop />
      <Testimonial />
      <Students />
      <Events />
      <MainPageBlog />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default MainPage;
