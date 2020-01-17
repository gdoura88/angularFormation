import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('contenu de vaibale color de mon pere!',this.filsProperty);
  }
  sendEvent(){
    this.sendRequestToData.emit(`send money`);
  }

}
