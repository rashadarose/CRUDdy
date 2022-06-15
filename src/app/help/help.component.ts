import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../hero';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

 @Input() item = '';

 data:any = [];

    constructor(private http: HttpClient) {
      
    this.http.get<any>('http://localhost/angular/hero.php').subscribe(data => {
    this.data.push(data);
    //console.log(this.data);
   
    
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}


