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

  // Async Fetch advice request
  // A function that returns a function. ** YOU NEED TO DISPATCH THIS FUNCTION **
  //The returned function accepts as an argument the dispatch function -
  //within it we make asynchronous requests and we can make a dispatch for the action we want to activate.
  const fetchAdvice = () => {
    return dispatch => {
      axios
        .get(`https://api.adviceslip.com/advice`)
        .then(({ data }) => {
          dispatch(addAdvice({ advice: data.slip.advice }));
        })
        .catch(error => {
          // TODO - Add like failure action and dispatch
          console.log(error);
        });
    };
  };
  return (
    <div>
      <h1>Good to know:</h1>
      <button onClick={() => dispatch(fetchAdvice())}>
        Give me one more advice 💡
      </button>
      <ul>
        {advices.length ? (
          advices.map(advice => (
            <li key={advice}>
              {' '}
              💡 <em>{advice}</em> 💡
            </li>
          ))
        ) : (
          <p style={{ color: 'red' }}>Empty List ¯\_(ツ)_/¯</p>
        )}
      </ul>
    </div>
  );
}

export default AdvicesList;
