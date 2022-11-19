"use strict";
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._coursecount = 1;
        this.city = 'Jaipur';
    }
    deleteToken() {
        console.log('Token deleted');
    }
    get getAppleEmail() {
        return `apple${this.name}`;
    }
    get courseCount() {
        return this._coursecount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._coursecount = courseNum;
    }
}
const ravi = new User('ravi@ravi.com', 'ravi', 'slll');
// ravi.deleteToken();
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._coursecount = 4;
    }
}
