import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CombineService } from 'src/app/combine.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn: boolean = false;
  loginForm!: FormGroup;
  username: string = '';
  password: string = '';
  usercredentials: any=[];


  constructor(private formBuilder: FormBuilder, private router: Router, private combine: CombineService) { 
    this.subscribeUser();
  }

  subscribeUser() {
    this.combine.getUser().subscribe((u) => {
      this.usercredentials = u;
    })
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.username = this.loginForm.controls['username'].value;
      this.password = this.loginForm.controls['password'].value;
      this.login(this.username, this.password);
    }
  }

  login(username: string, password: string) {
   console.log(username);
   console.log(password);
   console.log(this.usercredentials);
    for (let i = 0; i < this.usercredentials.length; i++) {
      console.log(this.usercredentials[i].name);
      if (username == this.usercredentials[i].name && password == this.usercredentials[i].password) {
        alert('Login was successful');
        this.loggedIn=true;
        this.router.navigateByUrl('/adminpage');
        return; // Exit the loop if credentials match
      }
     
      
    }
    
    
    
    
  }


  
}
