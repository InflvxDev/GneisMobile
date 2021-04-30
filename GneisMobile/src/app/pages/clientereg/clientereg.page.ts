import { Component, OnInit } from '@angular/core';
import { cliente } from '../../class/cliente';

@Component({
  selector: 'app-clientereg',
  templateUrl: './clientereg.page.html',
  styleUrls: ['./clientereg.page.scss'],
})
export class ClienteregPage implements OnInit {
  cliente: cliente;
  constructor() { 
    this.cliente = new cliente ();
  }

  ngOnInit() {
  }

  addcliente(){
    console.log(this.cliente);
  }

}
