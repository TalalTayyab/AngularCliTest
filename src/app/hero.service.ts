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
  }

  getHero(id:number): Promise<Hero>{
    return this.getHeroes().then((h)=>h.find(x=>x.id === id));
  }


}



