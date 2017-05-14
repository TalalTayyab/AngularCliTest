import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { Hero } from '../../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero
  constructor(private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService
      .updateHero(this.hero)
      .then(() => this.goBack());
  }
}
