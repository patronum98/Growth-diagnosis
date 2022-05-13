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

    static getUsersInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;
