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
