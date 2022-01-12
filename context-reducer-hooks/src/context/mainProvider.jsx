import React, { useReducer } from 'react';
import mainContext from './mainContext';
// Date
import blogsList from '../data/blogsList';
//
import mainReducer from '../reducers/mainReducer';

// A component that contains functionality and state and exports them to all children by using context
function MainProvider({ children }) {
  // hook that receives the reducer and the initial state
  // Returns the state and a function that is the one that knows how to activate the reducer - it is commonly called dispatch
  const [blogs, dispatch] = useReducer(mainReducer, [...blogsList]);

  return (
    <mainContext.Provider
      value={{
        blogs,
        dispatch,
      }}
    >
      {children}
    </mainContext.Provider>
  );
}

export default MainProvider;
