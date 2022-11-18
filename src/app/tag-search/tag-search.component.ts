import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.scss']
})
export class TagSearchComponent implements OnInit, OnChanges {

  @Output() tags: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {}

  onSubmit(form: NgForm): void {
    this.tags.emit(form.value["word"]);
  }

}
