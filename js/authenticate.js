/**
 * This file is responsible for authenticating the user
 *
 * A global variable called user is used to keep track
 * of who is logged in at any point of time
 *
 * */

var user;
getUser();

function getUser(){
    // look inside cookie and get user information

    // create a user object for quick access to roles and authorization
    user = {};
    user.authorization = ''; // admin - cookie data
    user.name = ''; // name - cookie

    console.log(user);

    return true; // or false depending on scenario

}

function login(username, password){
    // getting user name
    // getting user password
    // check with localstorage if the username and password are valid
    //    if valid get username and role from localStorage
    //      set cookie --> user_role=role
    //      set cookie --> user_name=username

    var user_profiles = JSON.parse(localStorage.getItem('UserProfiles'));

    var users = _.where(user_profiles, { username: username });
    if (users.length) {
        var user = users[0];
        if (user.password === password) {
            console.log('Welcome .. ');
            console.log(user);

            // set cookie information with an expiry set to 30mins
            // todo: set cookie expiry
            document.cookie = 'user_role=' + user.type;
            document.cookie = 'user_name=' + user.username;

        } else {
            console.log('Incorrect password');
        }
    } else {
        console.log('user does not exist');
    }

}

function logout(){

}