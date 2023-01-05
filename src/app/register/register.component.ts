import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailId: any;
  password: any;


  constructor(private route: Router, private ds: DataServicesService, private formBuilder: FormBuilder) { }
  registerform = this.formBuilder.group({ emailId: ['', [Validators.required, Validators.email]], password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]] })

  ngOnInit(): void {
  }

  register() {
    var emailId = this.registerform.value.emailId
    var password = this.registerform.value.password
    if (this.registerform.valid) {
      this.ds.register(emailId, password)
        .subscribe((result: any) => {
          alert(result.message);
          this.route.navigateByUrl('sign-In')
        })
    }
    else{
      alert('Invalid Form')
    }
  }



}
