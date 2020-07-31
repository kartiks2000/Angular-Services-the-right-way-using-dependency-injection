import { Component, OnInit } from '@angular/core';
import { msg } from '../msgservice';

@Component({
  selector: 'app-dem',
  templateUrl: './dem.component.html',
  providers: [msg]
})
export class DemComponent implements OnInit {

  constructor(private messaging: msg) { }

  y = '';
  changing = (e) => {
    this.y = e.target.value;
    this.messaging.msgme("y");
  }  
}
