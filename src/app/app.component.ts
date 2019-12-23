import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  ngOnInit() {
  }

 errorOutput(event){
   if(!event){
     alert("Please Enter Number Only");
   }
 }
}
