import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  id: any = '';
  accordion(ids: any) {
    if (this.id == ids) {
      this.id='';

    }
    else{
      this.id=ids
    }
  }


}
