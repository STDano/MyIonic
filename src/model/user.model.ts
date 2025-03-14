export class User {
    public _username: string;
    public _email: string;
    public _password: string;

    get getUsername() {
        return this._username;
    }

    set username(val: string) {
        this._username = val;
    }

    get getEmail() {
        return this._email;
    }

    set email(val: string) {
        this._email = val;
    }

    get getPassword() {
        return this._password;
    }

    set password(val: string) {
        this._password = val;
    }

    constructor(username: string, email: string, password: string) {
        this._username = username;
        this._email = email;
        this._password = password;
    }
}
