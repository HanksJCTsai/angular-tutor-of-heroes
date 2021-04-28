import { Component, OnInit } from '@angular/core';

import { Hero } from './../hero';

import { HeroService } from './../hero.service';

@Component({
  selector: 'as-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes:Hero [] = [];
  constructor(private heroservice:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes():void{
    this.heroservice.getHeroes().subscribe(result => this.heroes = result.slice(1,5));
  }
}
