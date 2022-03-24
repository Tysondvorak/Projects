import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1prob10',
  templateUrl: './hw1prob10.page.html',
  styleUrls: ['./hw1prob10.page.scss'],
})
export class Hw1prob10Page implements OnInit {
message; 
  constructor() { }

  ngOnInit() {
    let test1 = Number (prompt('enter score'))
    let test2 = Number(prompt('enter score'))
    let test3 = Number(prompt('enter score'))
    this.message =  `add then divide`
  }

}
