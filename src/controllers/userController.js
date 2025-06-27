import UserModel from "../models/userModel.js";


import validator from 'validator';

export default class UserController { 
  getLandingPage(req, res){
    res.render('landing-page', {title :"Easily - A Job Portal"});
  }

  renderLoginPage(req, res){
    res.render('user-login', {title : "Easily - Login"});
  }

  loginVerification(req, res){
    const {email, password} = req.body;
    let Errors = [];
    if(!validator.isEmail(email)){
      Errors.push("Not a valid Email..!");
    }
    if(Errors.length > 0){
      return res.render('404');
    }
    let obj = UserModel.getUserByMail(email, password);
    if(obj){
      const user = {
        name:obj.name
      }
      return res.render('landing-page', {user:user});
    }
  }

  creatingNewUser(req, res){
    const {name, email, password} = req.body;
    let Errors = [];
    if(!name){
      Errors.push("Not a valid name..!");
    }
    if(!validator.isAlpha(name)){
      Errors.push("Name can only contain alpabets aA - zZ");
    }
    if(!validator.isEmail(email)){
      Errors.push("Not a valid Email..!");
    }
    if(Errors.length > 0){
      return res.render('404');
    }

    let user_obj = {
      name : name.trim(),
      email : email.trim(),
      password : password
    }

    let user_created = UserModel.addNewUser(user_obj);

    if(user_created){
      res.render('user-login');
    }
  }

}