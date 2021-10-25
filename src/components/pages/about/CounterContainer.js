import React from 'react';
import Counters from './Counters';
import VisionMission from './VisionMission';
import '../../../assets/styles/counter.css';

function CounterContainer() {
  return (
    <div className="counter_area pb-130">
      <div className="container">
        <Counters />
        <VisionMission />
      </div>
    </div>
  );
}

export default CounterContainer;
