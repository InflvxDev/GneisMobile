import { EventEmitter, Injectable } from '@angular/core';
import { cliente } from '../class/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseurl: string = 'https://gneis-server.herokuapp.com/cliente';
  clientes$ = new EventEmitter<cliente[]>();
  constructor(private http: HttpClient) {
  
   }

 


  get(){
    return this.http.get(this.baseurl).subscribe((res:any)=>{
      this.clientes$.emit(res.clientes);
    })
  }

  post(cliente: cliente){
    return this.http.post(this.baseurl, cliente).subscribe((res:any)=>{
      this.clientes$.emit(res.clientes);
    })
  }

  delete(idh){
    return this.http.delete(this.baseurl+'/'+idh).subscribe((res:any)=>{
      this.clientes$.emit(res.clientes);
    })
  }
}
