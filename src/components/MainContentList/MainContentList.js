import React from 'react';
import MainContent from '../MainContent/MainContent';

const MainContentList = ({ notes }) => {
  return (
    <div>
      {
        notes.map(note => (
          <MainContent {...note} />
        ))
      }
    </div>
  );
};

export default MainContentList;
