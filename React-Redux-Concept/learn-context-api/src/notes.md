# `State Management - creating react app with context API`

### Lifting up the state:
- Moving state to the parent component i.e. from MovieList.js to App.js
- But App component doesn't require the movie state this will require to keep passing the props (containing movies state) to child components

### resolving this issue with state management using context api

- So, rather than adding state in movie list we can create context component (i.e. movie list context)
- Then context can passed to whichever component we want without defining props and passing it down (MovieContext.js)

1. create MovieProvider (it will provide information to different components)
2. `createContext` in MovieContext.js (MovieContext)
3. We can wrap our MovieProvider around all those components where we want them to access our state and can get define them `{props.children}`
4. We define a value in `MovieContext.Provider` and that value will be accessible to all the chilren components wrapped around `MovieProvider`
5. `useContext` hool will allow us to access the context (state) which we created and passig in out custom provider


### `Note:` all the components are going to re-render when we change the state using contextapi