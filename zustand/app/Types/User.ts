
export interface Iuser {
    email: string;
    password: string;
}

class AuthManager {
    token: string | null = null;
    login(email: string, password: string, setUser: (user: Iuser) => void) {
        setUser({ email, password });
        this.token = 'token';
        return true
    }

    signup(email: string, password: string, addUser: (user: Iuser) => void) {
        addUser({ email, password });
        return true
    }

    getToken() {
        return this.token;
    }
}

export default AuthManager;
