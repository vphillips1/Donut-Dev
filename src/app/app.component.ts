import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'donutdev';

  http: HttpClient = null;
   donuts = null;
   detailDonutComp = null;
  constructor(theHttp: HttpClient)
  {

      this.http = theHttp;
      this.loadDonuts();
  }

  loadDonuts() {
    this.http.get<any>('https://grandcircusco.github.io/demo-apis/donuts.json').subscribe(result => {
     
      this.donuts = result.results
   
    console.log(this.donuts);
    }, error =>
    {
      console.log(error);
    });
    

  }

  clickDetail(id) {
  for(let i=0; i<this.donuts.length; i++) {

    if(this.donuts[i].id == id) {

     // alert(`found it! ${this.donuts[i].name}`);
     //alert(this.donuts[i].ref);
     this.loadDonutDetail(this.donuts[i]);
     return;
    }
  }
  }


  loadDonutDetail(obj) {
    this.http.get<any>(obj.ref).subscribe(result => {
        
    console.log(result);
    this.detailDonutComp.test();
    this.detailDonutComp.whichdonut = result;
    }, error =>
    {
      console.log(error);
    });

  }
}
