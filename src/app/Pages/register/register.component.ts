import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      name: [null, Validators.required],
      mail: [null, [Validators.required]],
      phone: [null, [Validators.required]]
    }, {
    });
  }

  onSubmit(){
    localStorage.setItem("tokenJet", "123");
    this.router.navigate(['/ok']);
  }

}
