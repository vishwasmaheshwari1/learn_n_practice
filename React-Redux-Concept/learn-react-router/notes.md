# Understanding React-Router (react version 6)

1. create basic react app with a nav and few different components
2. import Browser-Router, Router, Switch (from react-roter-dom)
3. Wrap around all your components which you want to route i.e. in App.js for all components
4. Route renders components based on URL

### `Note:` An app can have multiple routes and can have nested route`s` (i.e. ones inside the parent Route will follow relative path) 

### nested routed route require an outlet and they are normally merge a different component with existing (i.e. parent - which comes from parent route) for a different url (route path)

### `Note:` Switch was used to make sure once the required component is found it doesnt look for another component but that issue was with before react v6. So, now it's fine.

### useEffect hook : function is going to run when the component mounts

### useParam - to get parameters which we sent in url
### useLocation - to get relative url path