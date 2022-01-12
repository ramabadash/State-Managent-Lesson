import React from 'react';
import { connect } from 'react-redux';
import { addLike } from '../actions/blogsActions';

function App({ blogs, addLike }) {
  return (
    <div className='App'>
      <h1>Hello Redux connect</h1>
      {blogs.map(({ title, author, url, likes }) => (
        <div key={url}>
          <p>
            title: {title} | author: {author} | url : {url} | likes: {likes}
            {'  '}
            <button
              type='button'
              style={{ color: 'red' }}
              onClick={() => addLike(url)}
            >
              ❤
            </button>
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

// Get functions that activate the reducer
//A function that accepts a dispatch as an argument and returns an object that the key will be the name of the props
//and the value will be a function that dispatches certain actions
const mapDispatchToProps = dispatch => {
  return {
    addLike: url => dispatch(addLike(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
