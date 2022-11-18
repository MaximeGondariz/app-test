import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tags: string;
  filter: string = ""
  title = 'app-test';

  searchPastrie(event :Event) {
    const key = (event.target as HTMLInputElement).value;

    this.filter = key
  }

  getTags(newTags: string){
    this.tags = newTags
  }
}
