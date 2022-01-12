// Switch case function
// Get state and action and by the actions type decide what to do
// You can send why more information - it is customary to send in action within payload what you want

const mainReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INITIAL_DATA': {
      return [...payload.data];
    }
    case 'LIKE_INCREMENT': {
      const newState = [...state]; // Copy the current state
      for (const blog of newState) {
        if (blog.url === payload.url) {
          blog.likes += 1;
        }
      }
      return [...newState];
    }
    default:
      return [...state];
  }
};

export default mainReducer;
