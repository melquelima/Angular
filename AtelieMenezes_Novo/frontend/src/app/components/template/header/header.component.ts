import { Component, OnInit } from '@angular/core';
import { mdiInstagram } from '@mdi/js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  instaIcon = mdiInstagram

  constructor() { }

  ngOnInit(): void {
  }

}
