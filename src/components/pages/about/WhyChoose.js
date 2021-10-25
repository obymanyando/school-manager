import React from 'react';
import TeachingMethods from './TeachingMethods';
import ToggleQA from './ToggleQA';
import '../../../assets/styles/WhyChoose.css';

function WhyChoose() {
  return (
    <div>
      <section className="why_choose_area pb-130">
        <div className="container">
          <TeachingMethods />
          <ToggleQA />
        </div>
      </section>
    </div>
  );
}

export default WhyChoose;
