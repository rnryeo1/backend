

const db =require("../config/db");

class UserStorage{
    static getUserInfo(id){
      return new Promise((resolve, reject) => {
        const query = "SELECT * FROM users WHERE id = ?;";
        db.query(query, [id] , (err,data) =>{
          if(err) reject(`${err}`);
          else resolve(data[0]);
        });
      }); 
    }

    

    static async save(userinfo){
      return new Promise((resolve, reject) => {
        const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
        db.query(query,[userinfo.id, userinfo.name, userinfo.psword], (err) =>{
             if(err) reject(`${err}`);
             else resolve({success:true});
          });
        });
      }

}

module.exports = UserStorage;