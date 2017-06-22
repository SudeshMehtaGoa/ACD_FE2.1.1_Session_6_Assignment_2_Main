
/* This assignment intializes two variables in ngOnInit and shown in HTML using string interpolation */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  firstname: string;
  lastname: string;

  ngOnInit() {
    this.title = '';
    this.firstname = 'Sudeshnn';
    this.lastname = 'Mehtayy';
  }

  setTitle(fname, lname) {

    /* creating title using values from input field */
    this.firstname = fname.value;
    this.lastname = lname.value;
    this.title = this.firstname + " " + this.lastname;

  }

}

