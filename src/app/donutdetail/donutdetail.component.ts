import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donutdetail',
  templateUrl: './donutdetail.component.html',
  styleUrls: ['./donutdetail.component.css']
})
export class DonutdetailComponent implements OnInit {
  @Input() parent = null;
  whichdonut = null;

  constructor() { }

  ngOnInit(): void {
    this.parent.detailDonutComp = this;
  }

  test() {

    console.log(this.whichdonut);
  }

}
