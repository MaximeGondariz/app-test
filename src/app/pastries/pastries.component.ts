import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PASTRIES } from '../mock-pastries';
import { PastrieService } from '../pastrie.service';



@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit, OnChanges {

  public pastrieService: PastrieService = new PastrieService

  @Input() search: string = "";
  @Input() tags: string = "";

  constructor(){
  }

  ngOnInit(): void {
  }

  ngOnChanges() {

    if(this.search == "" && this.tags == undefined || this.tags == ""){
      this.pastrieService.pastries = PASTRIES;
    }

    if(this.search != "" && this.tags == undefined || this.tags == ""){
      this.pastrieService.pastries = PASTRIES.filter(elem => elem.name.toLowerCase().includes(this.search.toLowerCase()));
    }

    if(this.search == "" && this.tags != undefined && this.tags != ""){
      const splitTags = this.tags.split(" ");
      const arrPastries: Pastrie[] = [];
      this.pastrieService.pastries.forEach(pastrie => {
        let control = 0;
        if(pastrie.tags != undefined){
          for(let i = 0;i < pastrie.tags.length; i++){
            for(let j = 0; j < splitTags.length; j++){
              if(pastrie.tags[i].toLowerCase().includes(splitTags[j].toLowerCase())){
                control++
              }
            }
          }
        }
        if(control == splitTags.length){
          arrPastries.push(pastrie)
        }
      })
      this.pastrieService.pastries = arrPastries;
    }

    if(this.search != "" && this.tags != undefined && this.tags != ""){
      this.pastrieService.pastries = PASTRIES.filter(elem => elem.name.toLowerCase().includes(this.search.toLowerCase()));

      const splitTags = this.tags.split(" ");
      const arrPastries: Pastrie[] = [];
      this.pastrieService.pastries.forEach(pastrie => {
        let control = 0;
        if(pastrie.tags != undefined){
          for(let i = 0;i < pastrie.tags.length; i++){
            for(let j = 0; j < splitTags.length; j++){
              if(pastrie.tags[i].toLowerCase().includes(splitTags[j].toLowerCase())){
                control++
              }
            }
          }
        }
        if(control == splitTags.length){
          arrPastries.push(pastrie)
        }
      })
      this.pastrieService.pastries = arrPastries;
    }


    // if(this.search != ""){
    //   this.pastrieService.pastries = PASTRIES.filter(elem => elem.name.toLowerCase().includes(this.search.toLowerCase()));
    // }else{
    //   this.pastrieService.pastries = PASTRIES;
    // }

    // if(this.tags != undefined && this.tags != ""){
    //   const splitTags = this.tags.split(" ");
    //   const arrPastries: Pastrie[] = [];
    //   PASTRIES.forEach(pastrie => {
    //     let control = 0;
    //     if(pastrie.tags != undefined){
    //       for(let i = 0;i < pastrie.tags.length; i++){
    //         for(let j = 0; j < splitTags.length; j++){
    //           if(pastrie.tags[i].toLowerCase().includes(splitTags[j].toLowerCase())){
    //             control++
    //           }
    //         }
    //       }
    //     }
    //     if(control == splitTags.length){
    //       arrPastries.push(pastrie)
    //     }
    //   })
    //   this.pastrieService.pastries = arrPastries;
    // }
    // else{
    //   this.pastrieService.pastries = PASTRIES;
    // }
  }
}

