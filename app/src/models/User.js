"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const { id, psword } = await UserStorage.getUsersInfo(client.id);
        
        if (id) {
            if (id === this.client.id && psword === client.psword) {
                return { success: true };
            }
            return { success: false, mag: "비밀번호가 틀렸습니다."};
        }
        return { success: false, mag: "존재하지 않는 아이디 입니다."};
    }

    register() {
        const client = this.body;
        UserStorage.save(client);
    }
}

module.exports = User;