import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }
  get f() { return this.registerForm.controls; }
  onSubmit() {
  this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
    
              return;
        }
    else
    {
    // Initialize Params Object
    //var myFormData = new FormData();
    const headers = new HttpHeaders();
    // Begin assigning parameters
    // myFormData.append('firstname', this.registerForm.value.firstname);
    // myFormData.append('email', this.registerForm.value.email);
    // myFormData.append('mobile', this.registerForm.value.mobile);
    var myFormData = {
      "user":{
          "firstname": this.registerForm.value.firstname,
          "password": this.registerForm.value.password,
          "email": this.registerForm.value.email,
          "mobile": this.registerForm.value.mobile
      }
  }
    return this.http.post('http://localhost:8888/api/user/', myFormData).subscribe(() => {
        
      alert("User has been add successfully.");
      
        
    });
    }
    }
  ngOnInit(): void {
  this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            mobile: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
  }
}