// import React from 'react';
// import { Redirect, Route } from 'react-router';
// import { useAuth } from '../Components/AuthContext';
// import Login from './Login';

// function PrivateRoute({ children, ...rest }) {
//     const {currentUser} = useAuth()
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//             currentUser ? (
//                     children
//                 ) : (
//                     <Login/>
//                 )
//             }
//         />
//     );
// }
// export default PrivateRoute;