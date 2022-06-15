import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl} from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ThemePalette} from '@angular/material/core';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

currentItem = 'Television';
  
  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
    {name: 'rasberry'},
    {name: 'lime'},
    {name: 'lemon'},


  ];



  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }

   
    data:any = [];

    constructor(private http: HttpClient) {}

  getAll(){

  this.http.get<any>('http://localhost/angular/employee.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
   
    
    }, error => console.error(error));
  }


   ngOnInit() {
   // this.getAll();
  }








}

