import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
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

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit() {
    this.heroService.getHeroes().then(h => this.heroes = h);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail',this.selectedHero.id]);
  }
}
