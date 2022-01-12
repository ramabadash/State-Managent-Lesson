# State-Management-Lesson

---

## useContext + useReducer

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
