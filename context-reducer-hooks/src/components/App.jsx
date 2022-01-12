import React, { useContext } from 'react';
// Context
import mainContext from '../context/mainContext';

function App() {
  /***** CONTEXT *****/
  const { blogs, dispatch } = useContext(mainContext); // Bring the value from the provider

  /***** FUNCTIONS *****/
  const handleLikeClick = url => {
    dispatch({ type: 'LIKE_INCREMENT', payload: { url } });
  };

  return (
    <div className='App'>
      <h1>Hello useContext useReducer</h1>
      {blogs.map(({ title, author, url, likes }) => (
        <div key={url}>
          <p>
            title: {title} | author: {author} | url : {url} | likes: {likes}
            {'  '}
          </p>
          <button
            type='button'
            style={{ color: 'red' }}
            onClick={() => handleLikeClick(url)}
          >
            ❤
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
