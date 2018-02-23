import React from 'react';


// when isAuthenticated = true it will render the dashboard page
// need to ask Chris what this is exactly (why doesn't this need to be a class since it contains methdos?)
// provides back methods that can be used globally
//  the callback is used to set certain other parameters such as redirect props in the login component
const Authentication = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); //fake async
    },
    // calling this with an onclick should let you signout             fakeAuth.signout(() => history.push("/"));
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

export default Authentication;