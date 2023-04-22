import { Component, Input, OnInit } from '@angular/core';
import { picAlbum } from 'src/app/models/user.model';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  @Input() images:picAlbum[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  public trackItem (index: number, item: picAlbum) {
    return item.id;
  }

}
