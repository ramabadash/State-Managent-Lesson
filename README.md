# State-Management-Lesson

---

## useContext + useReducer

#### 1 Create the db (initial state)

#### 2 Create context :

- **Creating the context for future use with the help of React's hook. Will be used by us in the future to create a component that will bring out with the context what we want.**

#### 3 Main Provider

- **A component that contains functionality and state and exports them to all children by using context**

#### 4 Test the Main Provider

- **Use useContext hook to retrieve the values provided**

#### 5 Create basic reducer

- **Switch case function**
- **No Side Effects**
- **Get state and action and by the actions type decide what to do**
- **You can send why more information - it is customary to send in action within payload what you want**

#### 6 Back to Main Provider

- **useReducer - hook that receives the reducer and the initial state. Returns the state and a function that is the one that knows how to activate the reducer - it is commonly called dispatch**
- **We have to provide them for the whole application so that we can use the state and change it with the help of a dispatch everywhere.**

#### 7 Dispatch

- **Import dispatch and state to App and use dispatch to Like**
- **Activating the function by writing actions in it (can also be set in a separate file)**

---

## Redux - Connect

#### 1 Create the db (initial state)

#### 2 Create Reducer

- **Switch case function**
- **Get state and action and by the actions type decide what to do**
- **You can send why more information - it is customary to send in action within payload what you want**

#### 3 Create the store

- **Configure store ([Read about](https://redux-toolkit.js.org/api/configureStore))**

#### 4 Provide the store

- **Use "Provider" from react-redux and wrap the app so we can use the store from every component**

#### 5 Connect the App component and mapStateToProps

- **Import the connect function from react-redux**
- **Connection and satisfaction mapStateToProps function as first argument in the export of the component**

#### 6 Use mapDispatchToProps

- **Second argument in the connect function**
- **A function that accepts a dispatch as an argument and returns an object that the key will be the name of the props and the value will be a function that dispatches certain actions**

#### 7 Dispatch and write Actions into different file

---

## Redux hooks + Redux thunk

#### 1 Create the db (initial state)

#### 2 blogSlice - initial state, actions and reducer in the same file !

#### 3 adviceSlice - initial state, actions and reducer in the same file !

#### 4 Configure store and add the reducers

#### 5 Provide the store to the app

#### 6 Use useSelector to "take" the blogs from the state

#### 7 Create AdvicesList component and use useSelector to "take" the advices from the state

#### 8 Install redux-thunk and axios `npm i redux-thunk axios`

#### 9 Provide redux-thunk middleware to the store

#### 10 Add API request and dispatch on click

##### 🔗 API LINK [adviceslip](https://api.adviceslip.com/#top)

##### 🔗 [Understanding Asynchronous Redux Actions with Redux Thunk](https://www.digitalocean.com/community/tutorials/redux-redux-thunk)
