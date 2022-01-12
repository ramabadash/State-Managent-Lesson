import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addAdvice } from '../reducers/adviceSlice';

function AdvicesList() {
  /***** STATES *****/
  const advices = useSelector(({ advices }) => advices);

  /***** FUNCTIONS *****/
  // Dispatch
  const dispatch = useDispatch();

  // Async Fetch weather request
  const fetchAdvice = () => {
    return dispatch => {
      axios
        .get(`https://api.adviceslip.com/advice`)
        .then(({ data }) => {
          dispatch(addAdvice({ advice: data.slip.advice }));
        })
        .catch(error => {
          console.log(error);
        });
    };
  };
  return (
    <div>
      <h1>Good to know:</h1>
      <button onClick={() => dispatch(fetchAdvice())}>
        Give me more advice 💡
      </button>
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
