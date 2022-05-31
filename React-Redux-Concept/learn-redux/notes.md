# Understanding React-Redux

Passing down data (state) using props become tedious as the application grows. So, that's why we use redux which creates a central data management entity (i.e. state).

1. Have Store which can be accessed anywhere (globalized state)


### STORE -> GLOBALIZED STATE

### ACTION  -> INCREMENT

### REDUCER -> Check which action is performed and based on that it will modify our store

### DISPATCH -> Performs the real action and tells reducer to call function/code and change the state

## Below code is to understand redux
```
//import {configureStore} from 'redux';
import {createStore} from 'redux';

//Redux
//STORE -> GLOBALIZED STATE

//ACTION  -> INCREMENT

const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//REDUCER -> Check which action is performed and based on that it will modify our store

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
}


//store takes in parameter as reducer (method)
let store = createStore(counter);

//display it in the console
store.subscribe(() => console.log(store.getState()))

//DISPATCH -> Performs the real action and tells reducer to call function/code and change the state
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
```



### After understanding basic, creating separate file for actions and reducer

1. defining reducers and action in their separate file
2. Adding all reducers in store as parameter  by using combinedReducer
3. import Provider which connects our store to entire App
