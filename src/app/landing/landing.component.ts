import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  //Edit Form
  editForm: FormGroup;
  submitted = false;
 //  userdata:any;
  showedituser = false;
  currentUser: any;
 //  userID:any;
 data = [];
 constructor(private http: HttpClient, private fb: FormBuilder) {
   this.http.get('http://localhost:8888/api/job/').subscribe(data => {
     this.data.push(data);
   }, error => console.error(error));

   this.editForm = this.fb.group({
     position: [''],
     jobscope: [''],
     jobtype: [''],
     cgpa: [''],
     experience: [''],
     salary: [''],
     location: [''],
     description: [''],
   })
 
 }

 refresh() {
   this.data.length=0;
   this.http.get('http://localhost:8888/api/job/').subscribe(data => {
   this.data.push(data);
   }, error => console.error(error));
 }
 deleteuser(id) {
//  var myFormData = new FormData();
  // var id = id;
    // myFormData.append('id', id);
 //   return this.http.delete('http://localhost:8888/api/user/'+id).subscribe((res: Response) => {
 //       //console.log(Response)
 //     alert("User has been deleted successfully.");
 //     this.refresh();
       
 //   });
 return this.http.delete('http://localhost:8888/api/job/'+id).subscribe(()=>
 {
     this.refresh();
 });

 }

 editModal(idx, id) {
   this.currentUser = { 
     ... this.data[0][idx],
     id
   }
   this.editForm.patchValue(this.currentUser)
   
   document.getElementById('editModal').style.display = 'block';
 }

 closeEditModal() {
   document.getElementById('editModal').style.display = 'none'
 }

 onSubmit() {
   const currentValue = this.editForm.value
   const currentUserDat = this.currentUser
   console.log(currentValue, currentUserDat)

   return this.http.put('http://localhost:8888/api/job/'+currentUserDat.id,currentValue).subscribe((res: Response) => {
       
     alert("User has been updated successfully.");
     this.refresh();
       
   });
 }
 

 ngOnInit(): void {
 }
}

