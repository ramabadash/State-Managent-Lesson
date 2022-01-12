import React from 'react';
import { useSelector } from 'react-redux';

function AdvicesList() {
  /***** STATES *****/
  const advices = useSelector(({ advices }) => advices.advices);

  return (
    <div>
      <h1>Good to know:</h1>
      <ul>
        {advices.length ? (
          advices.map(advice => <li key={advice}>{advice}</li>)
        ) : (
          <p style={{ color: 'red' }}>Empty List ¯\_(ツ)_/¯</p>
        )}
      </ul>
    </div>
  );
}

export default AdvicesList;
