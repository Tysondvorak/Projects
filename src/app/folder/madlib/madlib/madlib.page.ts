import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madlib',
  templateUrl: './madlib.page.html',
  styleUrls: ['./madlib.page.scss'],
})
export class MadlibPage implements OnInit {
message;

  constructor() { }

  ngOnInit() {

    let container = prompt('enter a container')
    this.message = `Don't forget your lunch ${container}`
  }
  

}
