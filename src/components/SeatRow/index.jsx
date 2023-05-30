import React from 'react';
import { Seat } from '../Seat';

export const SeatRow = ({ row }) => {
  console.log('zobrazení row', row);
  return (
    <div className="seat-row">
      {row.map((oneSeat) => (
        <Seat
          key={oneSeat.number}
          number={oneSeat.number}
          isOccupied={oneSeat.isOccupied}
        />
      ))}
    </div>
  );
};
