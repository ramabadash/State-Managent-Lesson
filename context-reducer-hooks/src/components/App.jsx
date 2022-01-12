import React, { useContext } from 'react';
// Context
import mainContext from '../context/mainContext';

function App() {
  /***** CONTEXT *****/
  const { blogsList } = useContext(mainContext); // Bring the value from the provider

  return (
    <div className='App'>
      <h1>Hello useContext useReducer</h1>
      {blogsList.map(({ title, author, url, likes }) => (
        <p>
          title: {title} | author: {author} | url : {url} | likes: {likes}{' '}
        </p>
      ))}
    </div>
  );
}

export default App;
