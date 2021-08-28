import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'refinitiv-question2';
  categories = [];
  text: string = "";

  constructor(
    private service: ApiService
  ) {
    this.service.getCategories().pipe().subscribe((r => {

      if (r) {
        this.categories = r;
      }
    }))
  }
}
