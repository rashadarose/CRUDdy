import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  tutors = [];


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, id: number): void {
    name = name.trim();
    //name = name;
    //console.log(name);
    
    //const formData : FormData = new FormData();
    //formData.append('heroName', name);
    //formData.append('heroID', id)
    
    if (!name) { return; }
    
    //this.heroService.addHero({ name } as Hero)
    //this.heroService.addHero(formData)
     // .subscribe(hero => {
       // this.heroes.push(hero);
        //console.log(hero[8]);
      //});
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
    //console.log(hero.id);
  }

  onSend(name:string, description:string){
    const formData : FormData = new FormData();

    formData.append('name', name);
    //formData.append('id', id);
    formData.append('description', description);
    this.heroService.onSendService(formData).subscribe(res =>{
        this.heroes.push(res as Hero[]);//no need to refresh page get this to work
        //console.log(res);
       
    },
    err => {
      console.log(err,"err");

    })
  }

}
