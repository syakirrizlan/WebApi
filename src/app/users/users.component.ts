import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   //Edit Form
   editForm: FormGroup;
   submitted = false;
  //  userdata:any;
   showedituser = false;
   currentUser: any;
  //  userID:any;
  data = [];
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.http.get('http://localhost:8888/api/user/').subscribe(data => {
      this.data.push(data);
    }, error => console.error(error));

    this.editForm = this.fb.group({
      firstname: [''],
      password: [''],
      email: [''],
      mobile: [''],
    })
  
  }

  refresh() {
    this.data.length=0;
    this.http.get('http://localhost:8888/api/user/').subscribe(data => {
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
  return this.http.delete('http://localhost:8888/api/user/'+id).subscribe(()=>
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

    return this.http.put('http://localhost:8888/api/user/'+currentUserDat.id,currentValue).subscribe((res: Response) => {
        
      alert("User has been updated successfully.");
      this.refresh();
        
    });
  }
  

  ngOnInit(): void {
  }
}

// export class AppComponent {
 
//   constructor(private http: HttpClient, private formBuilder: FormBuilder){
//     this.http.get('http://localhost/save.php').subscribe(data => {
//       this.data = data;
      
//       }, error => console.error(error));
//   }
//   //Edit User Button Click
  // edituser(id)
  // {
  //   // Initialize Params Object
  //   var myFormData = new FormData();
  //   this.showedituser = true;
  //   // Begin assigning parameters
  //   myFormData.append('userid', id);
    
  // return this.http.post('http://localhost/save.php/'
  //   , myFormData).subscribe((res: Response) => {
  //     this.userdata = res[0];
  //     //set values in edit user form
  //     this.editForm.controls["firstname"].setValue(this.userdata.username);
  //     this.editForm.controls["email"].setValue(this.userdata.email);
  //     this.editForm.controls["mobile"].setValue(this.userdata.mobile);
  //     this.userID = this.userdata.id;
  //     //edit user modal show
  //     $("#editModal").modal("show");
      
  //   });
  // }
//   //Update User Function
//   get f() { return this.editForm.controls; }
//   onSubmit() {
    
//     this.submitted = true;
//     // stop here if form is invalid
//     if (this.editForm.invalid) {
//         return;
//     }
//     //True if all the fields are filled
//     if(this.submitted)
//     {
      
//       // Initialize Params Object
//       var myFormData = new FormData();
    
//     // Begin assigning parameters
    
//     myFormData.append('updateUsername', this.editForm.value.firstname);
//     myFormData.append('updateEmail', this.editForm.value.email);
//     myFormData.append('updateMobile', this.editForm.value.mobile);
//     myFormData.append('updateid', this.userID);
    
//     return this.http.post('http://localhost/save.php/'
//       , myFormData).subscribe((res: Response) => {
        
        
//         $("#editModal").modal("hide");
        
//           //sweetalert message popup
//           Swal.fire({
//           title: 'Hurray!!',
//           text:   "User has been updated successfully",
//           icon: 'success'
//         });
          
//           //refetch users from datatabse
//           return this.http.get('http://localhost/save.php').subscribe(data => {
//             this.data = data;
//            }, error => console.error(error));
          
        
//     });
//     }
   
//   }
//   ngOnInit() {
//       //Edit form validations
//       this.editForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
  
//       firstname: ['', [Validators.required]]
      
//       });
//   }
//   }