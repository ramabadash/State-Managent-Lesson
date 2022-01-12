import React from 'react';
import mainContext from './mainContext';
import blogsList from '../data/blogsList';

// A component that contains functionality and state and exports them to all children by using context
function MainProvider({ children }) {
  return (
    <mainContext.Provider
      value={{
        blogsList,
      }}
    >
      {children}
    </mainContext.Provider>
  );
}

export default MainProvider;
