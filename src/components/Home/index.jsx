import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDeatil';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (journey) => setJourney(journey);

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <JourneyDetail journey={journey} />}
    </main>
  );
};
