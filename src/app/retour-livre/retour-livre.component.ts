import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-retour-livre',
  templateUrl: './retour-livre.component.html',
  styleUrls: ['./retour-livre.component.css']
})
export class RetourLivreComponent implements OnInit {
  

  id: number | undefined;
  
  livres: any;
  liv=this.livres[0];
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): {this.loadlivre();
  }
  loadlivre(){
    this.id=this.route.snapshot.params['id'];
    this.id=Number(this.id)-1;
    this.liv=this.livres[this.id];
  }

  getColor(){
    if(this.liv.commander=='oui') return'green';
        else return 'red';  }
  onObtenir(){ this.liv.commander='oui';}
  reinitialiser(){this.liv.commander='non'}

}
