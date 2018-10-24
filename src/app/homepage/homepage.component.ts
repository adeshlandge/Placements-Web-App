import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormsModule } from '@angular/forms';


import { User } from '../models/user.model';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    ngOnInit() { }

    public user : User;

  constructor(private loginService: LoginService, private router: Router,) {
    this.user = new User();
   
  }

  validateLogin() {
  	if(this.user.username && this.user.password) {
  		this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success') {
          this.router.navigate(['/launching']);
        } else {
          alert('Wrong username password');
        }
        
      }, error => {
        console.log('error is ', error);
      });
  	} else {
  		alert('enter user name and password');
  	}
  }
  // usr:MUser

//   constructor(private router:Router,private sing:LoginService) {
    
//    }
  // ngOnInit() { 
  //     this.usr =new MUser(' ');
  // }
  // SubmitForm(){
      
  //     this.router.navigate(['/launching']);
  //     this.sing.getValues(this.usr);
  // }
 
// }
// export class MUser{
// uname:string
// // grd:string
// // roll:number
// // constructor(Fname,Roll,Grd){
//   constructor(Fname){
//     this.uname =Fname;
//     // this.grd = Roll;
//     // this.roll =Grd;
// }


}
