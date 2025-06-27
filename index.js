import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import session from 'express-session';

import userController from './src/controllers/UserController.js';
import jobController from './src/controllers/jobsController.js';
import UserModel from './src/models/userModel.js';


const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());  


app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));
app.use(expressEjsLayouts);
app.set('layout', 'layout');


app.use(
  session({
    secret:'unique_different',
    resave:false,
    saveUninitialized:true,// 
    cookie:{
      maxAge:1000*60, //10 mins
    }
  })
);

app.use('/', (req, res, next)=>{
  console.log(req.session.email);
  if(req.session.email){
    let user = UserModel.getUserFromEmail(req.session.email);
    res.locals.user = user;
    req.user = user;
  }else {
    req.user = null;
  }
  next();
})


const UserController = new userController();
app.get("/", UserController.getLandingPage);
app.get("/login", UserController.renderLoginPage);
app.post("/login", UserController.loginVerification);
app.post("/register", UserController.creatingNewUser);
app.get("/logout", UserController.userLogout);



const JobController = new jobController();
app.get("/jobs", JobController.getAllJobs);
app.get("/jobs/:id", JobController.getJobFullDetails);
app.get("/postjob", JobController.postJobPage);
app.post("/job", JobController.newJobData);


app.listen(port,(err)=>{
  if(err){
    console.log("Error : " , err);
  }
  console.log(`Server Started at PORT : ${port}`);
});