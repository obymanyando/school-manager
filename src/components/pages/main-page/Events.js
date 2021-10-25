import React, { useContext } from 'react';
import '../../../assets/styles/events.css';
import Event1Image from '../../../assets/images/hr/event-1.jpg';
import Event2Image from '../../../assets/images/hr/event-2.jpg';
import Event3Image from '../../../assets/images/hr/event-3.jpg';
import { WorkshopListContext } from '../../../contexts/WorkshopContext';
import { formatDateString } from '../../../helpers/formatDate';

const Events = () => {
  const { sortedWorkshop } = useContext(WorkshopListContext);
  const sortedDate = sortedWorkshop.map((item) =>
    formatDateString(item.fields.date)
  );
  const sortedLocations = sortedWorkshop.map((item) => item.fields.location);
  const sortedTitles = sortedWorkshop.map((item) => item.fields.title);
  return (
    <section className="events_area d-flex flex-wrap">
      <div className="events_left">
        <div className="single_events first_event d-flex flex-wrap">
          <div
            className="events_content bg_cover"
            style={{ backgroundImage: `url(${Event1Image})` }}
          >
            <div className="events_wrapper">
              <ul className="events_meta">
                <li>
                  <p className="color-1">
                    <i className="fa fa-calendar"></i> {sortedDate[0]}
                  </p>
                </li>
                <li>
                  <p className="color-2">
                    <i className="fa fa-map-marker"></i> {sortedLocations[0]}
                  </p>
                </li>
              </ul>
              <h4 className="events_title">{sortedTitles[0]}</h4>
            </div>
          </div>
          <div className="events_content_title">
            <div className="events_wrapper">
              <h3 className="title">Hoạt động</h3>
            </div>
          </div>
        </div>

        <div className="single_events d-flex flex-wrap">
          <div
            className="events_content events_content_2 bg_cover"
            style={{ backgroundImage: `url(${Event2Image})` }}
          >
            <div className="events_wrapper">
              <ul className="events_meta">
                <li>
                  <p className="color-1">
                    <i className="fa fa-calendar"></i> {sortedDate[1]}
                  </p>
                </li>
                <li>
                  <p className="color-2">
                    <i className="fa fa-map-marker"></i> {sortedLocations[1]}
                  </p>
                </li>
              </ul>
              <h4 className="events_title">{sortedTitles[1]}</h4>
            </div>
          </div>
        </div>
      </div>
      <div
        className="events_right bg_cover"
        style={{ backgroundImage: `url(${Event3Image})` }}
      >
        <div className="events_content_3 text-center">
          <div className="events_wrapper">
            <ul className="events_meta">
              <li>
                <p className="color-1">
                  <i className="fa fa-calendar"></i> {sortedDate[2]}
                </p>
              </li>
              <li>
                <p className="color-2">
                  <i className="fa fa-map-marker"></i> {sortedLocations[2]}
                </p>
              </li>
            </ul>
            <h4 className="events_title">{sortedTitles[2]}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
