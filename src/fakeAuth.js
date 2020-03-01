
// const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb) {
//         console.log(cb, '-------!!!!!!!!!!!!')
//       fakeAuth.isAuthenticated = true;
//       setTimeout(cb, 100); // fake async
//     },
//     signout(cb) {
//       fakeAuth.isAuthenticated = false;
//       setTimeout(cb, 100);
//     }
//   };

//   export default fakeAuth;


  const AppState= {
    loggedIn: false,
    login: function(){
        console.log('here!!!!')

        this.loggedIn = true;
    },
    logout: function(){
        this.loggedIn = false;
    }
};

export default AppState;