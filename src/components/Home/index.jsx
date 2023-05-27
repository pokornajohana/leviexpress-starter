import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDeatil';
import { SelectedSeat } from '../SelectedSeat';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (journey) => setJourney(journey);

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <JourneyDetail journey={journey} />}
      {journey === null ? null : <SelectedSeat number={journey.autoSeat} />}
    </main>
  );
};
