import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  emailId: any
  password: any
  constructor(private router: Router, private ds: DataServicesService, private formbuilder: FormBuilder) { }
  loginform = this.formbuilder.group({ emailId: ['', [Validators.required, Validators.email]], password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z\@*]+')]] })

  ngOnInit(): void {
  }

  login() {
    var emailId = this.loginform.value.emailId
    var password = this.loginform.value.password
    if (this.loginform.valid) {
      this.ds.login(emailId, password)
        .subscribe((result: any) => {
          alert(result.message)
          this.router.navigateByUrl('/dashboard')
        })
    }
    else {
      alert('Invalid Details')
    }
  }

}
