import React from 'react';
import './style.css';
import { BusStop } from '../BusStop';

export const JourneyDetail = ({ journey }) => {
  return (
    <>
      <div className="journey-detail container">
        <h2>Podrobnosti cesty</h2>
        <div className="stops">
          {journey.stops.map((oneStop) => (
            <BusStop
              key={oneStop.code}
              name={oneStop.name}
              station={oneStop.station}
              time={oneStop.time}
            />
          ))}
        </div>
      </div>
    </>
  );
};
