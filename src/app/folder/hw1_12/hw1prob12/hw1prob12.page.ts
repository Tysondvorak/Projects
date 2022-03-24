import { Component, OnInit } from '@angular/core';
import { createPublicKey } from 'crypto';
import { Capability } from 'protractor';
import { checkServerIdentity } from 'tls';

@Component({
  selector: 'app-hw1prob12',
  templateUrl: './hw1prob12.page.html',
  styleUrls: ['./hw1prob12.page.scss'],
})
export class Hw1prob12Page implements OnInit {
  upper
  lower
  length
  start
  constructor() { }

  ngOnInit() { 

    let favcity = ('enter city')
    this.upper = favcity.toUpperCase()
    this.lower = favcity.toLowerCase()
    this.length = favcity.length
    this.start = favcity.charAt(0)
    
  }

}
