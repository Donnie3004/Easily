export default class UserModel { // this is a recruiter...!
  constructor(_id, _name, _email, _password) {
    this.id = _id;
    this.name = _name;
    this.email = _email;
    this.password = _password;
  }

  static getUserByMail(_email, _password){
    for(let i=0;i<USERS.length;i++){
      if(USERS[i].email === _email && USERS[i].password === _password){
        return USERS[i];
      }
    }
    return false;
  }

  static addNewUser(obj){
    try {
      const new_user = new UserModel(100000 + USERS.length + 1, obj.name, obj.email, obj.password);
      USERS.push(new_user);
      return true;
    } catch (error) {
      console.log("Error occured while creating a user : ", error);
      return false;
    }
  }
}


const USERS = [
  new UserModel(100001, "Arbaz", "arbazsheikh3004@gmail.com", "dummy@123"),
  new UserModel(100002, "Sheikh", "sheikh3004@gmail.com", "dummy123"),
  new UserModel(100003, "Hero", "arbazsheikh@gmail.com", "dummy@12")
]