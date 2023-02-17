import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='shadow white f-headline pa4 mb4 '>
        {`${name}, Scans detected to date:`}
      </div>
      <div className=' shadow white f-headline'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;