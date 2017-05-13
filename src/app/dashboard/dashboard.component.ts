import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../../hero';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroService.getHeroes().then(h=>this.heroes = h.slice(0,4));
   }

  ngOnInit() {
  }

}
