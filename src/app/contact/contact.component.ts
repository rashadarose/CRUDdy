import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 constructor() { }

  ngOnInit(): void {
  }
  
	amount = 1;
	from = "USD";
	to = "GBP";
	rate = 1.41;

	convert(): number{
		return this.amount * this.rate;

	}



 

}
