import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelecaoService } from 'src/app/services/selecao/selecao.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    window.localStorage.clear();
    this.router.navigate(['/login'])
  }

}
