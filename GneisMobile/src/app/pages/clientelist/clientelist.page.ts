import { Component, OnInit } from '@angular/core';
import { cliente } from '../../class/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientelist',
  templateUrl: './clientelist.page.html',
  styleUrls: ['./clientelist.page.scss'],
})
export class ClientelistPage implements OnInit {
clientes : cliente[];
  constructor(private ClienteService: ClienteService) { 
    this.get()
  }

  ngOnInit() {
    this.ClienteService.firstget().subscribe((res:any)=>{
      this.clientes = res.clientes;
      console.log(this.clientes);
    })
  }

  get(){
    this.ClienteService.clientes$.subscribe((res)=>{
      this.clientes = res;
    })
  }

  delete(idc){
    this.ClienteService.delete(idc);
  }

}
