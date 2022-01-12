import React from 'react';
import { connect } from 'react-redux';

function App({ blogs }) {
  return (
    <div className='App'>
      <h1>Hello Redux connect</h1>
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

// Get blogs from state
//A function that accepts state as an argument and returns an object whose key is the name of the props and the value is its value
const mapStateToProps = state => {
  return { blogs: state };
};

export default connect(mapStateToProps)(App);
