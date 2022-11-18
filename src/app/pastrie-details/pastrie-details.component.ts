import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pastrie } from '../pastrie';
import { INGREDIENTS_LISTS, PASTRIES } from '../mock-pastries'

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit, OnChanges {

  @Input() pastrie: Pastrie;
  ingredients: Array<string> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
      if(this.pastrie){
        this.ingredients = INGREDIENTS_LISTS.find(elem => elem.id === this.pastrie.id)?.list || []
      }
  }

  addIngre(event :Event) {
    const key = (event.target as HTMLInputElement).value;

    INGREDIENTS_LISTS[Number(this.pastrie.id)-1].list.push(key);

    (event.target as HTMLInputElement).value = ""
  }

  deleteIngre(index: number){
    INGREDIENTS_LISTS[Number(this.pastrie.id)-1].list.splice(index,1);
  }

  sortList(){
    this.ingredients.sort()
  }

  sortReverse(){
    this.ingredients.sort()
    this.ingredients.reverse()
  }
}
