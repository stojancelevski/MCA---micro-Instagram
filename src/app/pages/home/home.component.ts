import { Component } from '@angular/core';
import { Photo } from '../../models/photo';
import { PreloadService } from '../../services/preload/preload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: Photo[];
  slice = 50;

  constructor(private api: PreloadService) {
    this.items = this.api.getItems().slice(0, this.slice);
  }

  onScroll() {
    this.slice += 50;
    this.items = this.api.getItems().slice(0, this.slice);

  }

}
