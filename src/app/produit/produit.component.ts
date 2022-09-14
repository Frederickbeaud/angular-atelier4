import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
    NomSte: string='AB Entreprise';
    produit=[
      {id:'1',designation:'chaussure',prix:'50',Qte:'3'},
      {id:'2',designation:'robe',prix:'150',Qte:'5'},
      {id:'3',designation:'chemise',prix:'80',Qte:'6'},
      {id:'4',designation:'jupe',prix:'100',Qte:'8'}
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
