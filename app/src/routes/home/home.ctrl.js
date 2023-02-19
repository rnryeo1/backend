
const logger = require("../../config/logger");
const User = require("../../models/User");
const output = {
    hello : (req, res) => {
        logger.info(`get /200 "홈 화면으로 이동`);
        res.render("home/index.ejs");
    },
    
    login : (req, res) => {
        logger.info(`get /200 "로그인 화면으로 이동`);
        res.render("home/login.ejs");
    },
    register: (req,res) => {
        logger.info(`get /200 "회원가입 화면으로 이동`);
        res.render("home/register.ejs");
    }
};




const process = {
    login: async (req, res) => {
        logger.info(`조쇼`);
        const user = new User(req.body);
        const response = await user.login();  //async await 함수는 자체적으로 promise를 
        //반환해주도록 되어있습니다. 따라서 await을 적용해줄수 있는 것입니다.
        
        
        const url ={
            method:"POST",
            path:"/login",
            status: response.err ? 400: 200,
        };

        log(response,url);
        return res.status(url.status).json(response);
    },
    register: async (req, res) => {
        logger.info(`조쇼`);
        const user = new User(req.body);
        const response = await user.register();   
        const url ={
            method:"POST",
            path:"/register",
            status: response.err ? 400: 200,
        };

        log(response,url);
        return res.status(url.status).json(response);
    },
};


module.exports = {
    output,
    process,
};

const log = (response,url) => {
    if(response.err){
        logger.error(
            `${url.method} ${url.path} ${url.status} POST /login 200 Response :  ${response.success} ${response.err}`);
    }else{
        logger.info(
            `${url.method} ${url.path} ${url.status} POST /login 200 Response :  ${response.success} ${response.msg || ""}`
        );
    }
};