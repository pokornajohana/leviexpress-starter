import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDeatil';
import { useNavigate } from 'react-router-dom';
import { SeatPicker } from '../SeatPicker';

export const Home = () => {
  const navigate = useNavigate();
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (journey) => setJourney(journey);

  const handleBuy = () => {
    console.log('Funguju');

    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate(`/reservation/${data.results.reservationId}`);
      });
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <JourneyDetail journey={journey} />}
      {journey === null ? null : (
        <SeatPicker seats={journey.seats} journeyId={journey.journeyId} />
      )}
      <div className="controls container">
        <button className="btn btn--big" type="button" onClick={handleBuy}>
          Rezervovat
        </button>
      </div>
    </main>
  );
};
