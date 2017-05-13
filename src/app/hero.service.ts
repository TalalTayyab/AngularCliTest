import { Injectable } from '@angular/core'; 
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return new Promise(r=>{
        setTimeout(()=>r(HEROES),200);
    });
   // return Promise.resolve(HEROES);
  }
}



