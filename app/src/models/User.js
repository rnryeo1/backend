
const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){ //비동기로 바꿔주어야 한다.
        const client = this.body;
        try{
            const user = await UserStorage.getUserInfo(client.id);
            //await 를 안쓰면 비동기가됨.

            if(user){
                if(user.id === client.id && user.psword === client.psword){
                    
                    return {success: true};
                }
                return {success: false, msg: "비밀번호 틀림"};
            }
            return {success: false, msg: "존재하지 않는 아이디"};
        }catch(err){
            return {success: false,err};
        }

    }

    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        }catch(err){
            return {success: false , err };
        }
        
    }
}
module.exports = User;