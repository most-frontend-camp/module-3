class UsernamePasswordAuth {
    authenticate(username, password) {
        // logic to authenticate using username and password
    }
}

class User {
    login(username, password) {
        const auth = new UsernamePasswordAuth();
        return auth.authenticate(username, password);
    }
}

// DIP
class AbstractAuthMethod(){
    authenticate(credentials) {
        // logic to authenticate using username and password
    }
}

class UsernamePassword extends AbstractAuthMethod(){
    authenticate(username, password) {
        // logic to authenticate using username and password
    }
}

class EmailAuth extends AbstractAuthMethod(){
    authenticate(email, token) {
        // logic to authenticate using username and password
    }
}
