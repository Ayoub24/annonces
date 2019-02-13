import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firstame: string = "";
  lastName: string = "";

  constructor() { }

  ngOnInit() {
  }

  logFirstName(first: any){
    console.log(first);
    this.firstame = first.control.value;
  }

  logLastName(last: any){
    this.lastName = last.control.value;
  }

  alertPopup(){
    alert("Hello" + ' ' + this.firstame +' '+ this.lastName );
  }
}
