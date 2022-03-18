import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Madlib', url: '/folder/madlib/madlib' , icon: 'newspaper-outline' },
    { title: 'Test Average Hw1', url: '/folder/Hw1_10/Hw1-prob10' , icon: 'analytics' },
    { title: 'Miles per gallon Hw1', url: '/folder/hw1_9/hw1prob9' , icon: 'analytics' },
  
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
