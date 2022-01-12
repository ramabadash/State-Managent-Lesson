import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  /***** STATES *****/
  // hook that comes from react redux and gets a function.
  //The function accepts the state (what store) as an argument
  //and what we return from the function will be stored for us in the variable we defined.
  const blogs = useSelector(({ blogs }) => blogs.blogs);

  return (
    <div className='App'>
      <h1>Blogs:</h1>
      {blogs.map(({ title, author, url, likes }) => (
        <div key={url}>
          <p>
            title: {title} | author: {author} | url : {url} | likes: {likes}
            {'  '}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
