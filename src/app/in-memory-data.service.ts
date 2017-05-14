import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {HEROES} from '../mock-heroes';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    let heroes = HEROES;
    return {heroes};
  }

}
