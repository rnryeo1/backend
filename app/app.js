//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");



const app = express();
dotenv.config();

const accessLogStream = require("./src/config/log");
//라우팅
const home = require("./src/routes/home");



//앱 세팅
app.set("views", "app/src/views");
app.set("views engine", "app/ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));





app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;



