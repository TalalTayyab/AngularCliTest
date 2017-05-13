import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
    providers: [HeroService]
})
export class HeroComponent implements OnInit {

   heroes: Hero[];
  selectedHero: Hero;
  title = 'My first angular app!';

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {
  }

  ngOnInit(){
     this.heroService.getHeroes().then(h=>this.heroes = h);
  }

}
