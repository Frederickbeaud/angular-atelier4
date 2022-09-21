import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
 livres=[
  {id:"1",titre:"Android",imageUrl:"assets/images/android.jpg",date:"01/10/2020",commander:"non"},
  {id:"2",titre:"Angular",imageUrl:"assets/images/angular.jpg",date:"02/02/2020",commander:"oui"},
  {id:"3",titre:"Bootstrap",imageUrl:"assets/images/bootstrap.jpg",date:"03/12/2020",commander:"non"}

 ];
  constructor() { }

  ngOnInit(): void {
  }

}
