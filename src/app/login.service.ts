// import { Injectable } from '@angular/core';
// import { MUser } from './homepage/homepage.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
  
//   srevice:MUser
//   constructor() {
//     this.srevice = new MUser(' ',' ',' ');
//    }

//   getValues(srevice){
//    this.srevice = srevice;
//   }
//   putvalues(){
//     return this.srevice;
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
// import { MUser } from './homepage/homepage.component';
// import { User } from '../models/user.model';

@Injectable()
export class LoginService {





// 	srevice:MUser
//   constructor(private http: HttpClient) {
//     this.srevice = new MUser(' ');
//    }

//   getValues(srevice){
//    this.srevice = srevice;
//   }
//   putvalues(){
//     return this.srevice;
//   }
	constructor(private http: HttpClient){

	}
	
	validateLogin(user: User){
		return this.http.post('/api/user/login',{
			username : user.username,
			password : user.password
		})
	}

}