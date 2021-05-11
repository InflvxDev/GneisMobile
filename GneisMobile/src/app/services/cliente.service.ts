import { EventEmitter, Injectable } from '@angular/core';
import { cliente } from '../class/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes$ = new EventEmitter<cliente[]>();
  constructor(private http: HttpClient) {
    this.get();
   }

  firstget(){
    return this.http.get('http://localhost:3000/cliente');
   }


  get(){
    return this.http.get('http://localhost:3000/cliente').subscribe((res:any)=>{
      this.clientes$.emit(res.clientes);
    })
  }

  post(cliente: cliente){
    return this.http.post('http://localhost:3000/cliente', cliente).subscribe((res:any)=>{
      this.clientes$.emit(res.clientes);
    })
  }

  delete(idh){
    return this.http.delete('http://localhost:3000/cliente/'+idh).subscribe((res:any)=>{
      this.clientes$.emit(res.clientes);
    })
  }
}
