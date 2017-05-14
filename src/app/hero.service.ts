import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Injectable()
export class HeroService {

  constructor(private http: Http) {

  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get('/api/heroes').toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    return this.http.get(`/api/heroes/${id}`)
      .toPromise().then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  updateHero(hero: Hero) {
    let url = `/api/heroes/${hero.id}`;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(url, JSON.stringify(hero), { headers: headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    let headers = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    let url = "/api/heroes/";
    let data = JSON.stringify({ name: name });

    return this.http.post(url, data, headers)
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

}



