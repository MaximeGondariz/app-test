import { Injectable } from '@angular/core';

import { Pastrie, List } from './pastrie';
import { INGREDIENTS_LISTS, PASTRIES } from './mock-pastries';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {

  public pastries: Pastrie[] = PASTRIES; // _ convention private et protected
  public ingredientsList: List[] = INGREDIENTS_LISTS;
  public selectedPastrie: Pastrie | undefined = undefined;

  constructor() { }

  selectPastrie(name: string | undefined){
    this.pastries.forEach(pastrie => {
      if(pastrie.name == name){
        this.selectedPastrie = pastrie
      }
      console.log(this.pastries)
    })
  }
}
