"use strict";

class UserStorage {
    static #users = {
        id: ["dbtmd", "박유승", "박팀장"],
        psword: ["1234", "1234", "12345"],
        name: ["김동현", "박유승", "손찬우"]
    };

    static getUsers(...fields) {
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
