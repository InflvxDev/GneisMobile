import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  
  constructor(private http: HttpClient) { }

  get(){
    this.http.get('http://localhost:3000/usuarios/consultar').subscribe( (res) => {console.log(res);});
  }
}
