import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

email:String;
password:String;

  constructor(public userService:UsersService) {
    document.body.style.margin = "0";
    document.body.style.display = "grid";
    document.body.style.height = "100vh";
    document.body.style.fontFamily = "Source Code Pro', monospace";
    document.body.style.background = "linear-gradient(#141e30, #243b55)";
    
    this.email='';
    this.password='';

  }


login(){

  const user = {email:this.email, password:this.password};

    this.userService.login(user).subscribe(data => {
      console.log(data);
    });

  console.log('Email: ' +this.email);
  console.log('Password: '+ this.password);
}; 
}
