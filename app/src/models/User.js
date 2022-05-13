"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const { id, psword} = UserStorage.getUsersInfo(body.id);
        
        if (id) {
            if (id === this.body.id && psword === body.psword) {
                return { success: true };
            }
            return { success: false, mag: "비밀번호가 틀렸습니다."};
        }
        return { success: false, mag: "존재하지 않는 아이디 입니다."};
    }
}

module.exports = User;