import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {
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
          "position": this.registerForm.value.position,
          "jobscope": this.registerForm.value.jobscope,
          "jobtype": this.registerForm.value.jobtype,
          "cgpa": this.registerForm.value.cgpa,
          "experience": this.registerForm.value.experience,
          "salary": this.registerForm.value.salary,
          "location": this.registerForm.value.location,
          "description": this.registerForm.value.description
      }
  }
    return this.http.post('http://localhost:8888/api/job/', myFormData).subscribe(() => {
        
      alert("User has been add successfully.");
      
        
    });
    }
    }
  ngOnInit(): void {
  this.registerForm = this.formBuilder.group({
            position: ['', Validators.required],
            jobscope: ['', Validators.required],
            jobtype: ['', Validators.required],
            cgpa: ['', Validators.required],
            experience: ['', Validators.required],
            salary: ['', Validators.required],
            location: ['', Validators.required],
            description: ['', Validators.required]
        });
  }
}