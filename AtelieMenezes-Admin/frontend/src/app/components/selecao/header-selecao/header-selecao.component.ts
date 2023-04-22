import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-selecao',
  templateUrl: './header-selecao.component.html',
  styleUrls: ['./header-selecao.component.css']
})
export class HeaderSelecaoComponent implements OnInit {

  isCollapsed = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
