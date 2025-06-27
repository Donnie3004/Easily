import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';


import userController from './src/controllers/UserController.js';

const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());  


app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));
app.use(expressEjsLayouts);
app.set('layout', 'layout');

const UserController = new userController();
app.get("/", UserController.getLandingPage);

app.listen(port,(err)=>{
  if(err){
    console.log("Error : " , err);
  }
  console.log(`Server Started at PORT : ${port}`);
});