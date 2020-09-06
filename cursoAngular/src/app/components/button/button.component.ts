import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() value: string;
  @Input() route: string;
  @Input() style: string;
  @Input() cbk: Function;

  constructor() { }

  ngOnInit(): void {
  }

  clicked = function () {
    if(this.route != undefined){
      
    }
    if(this.cbk != undefined){
      eval(this.cbk);
    }
  }


}
