import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HEROES } from './../mock-heroes';

import { HeroService } from './../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'as-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroservice:HeroService, private messageservice:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroservice.getHeroes().subscribe(result => this.heroes = result);
  }
  add(addHeroName:string):void{
    let name = addHeroName.trim();
    if (!name) { return; }
    this.heroservice.addHero({ name } as Hero).subscribe(
      result => {
        this.heroes.push(result);
      });
  }
  delete(delhero:Hero):void{
    const tempheroes = [];
    Object.assign(tempheroes, this.heroes);
    this.heroservice.deletHero(delhero).subscribe(()=> {
      this.heroes = tempheroes.filter(temphero => temphero.id !== delhero.id);
    });
  }
}
