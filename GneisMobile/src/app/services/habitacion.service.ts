import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { habitacion } from '../class/habitacion';
@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  
  habitaciones$ = new EventEmitter<habitacion[]>();
  constructor(private http: HttpClient) {
    this.get();
    
   }

  firstget(){
    return this.http.get('http://localhost:3000/habitacion');
   }


  get(){
    return this.http.get('http://localhost:3000/habitacion').subscribe((res:any)=>{
      this.habitaciones$.emit(res.habitaciones);
    })
  }

  post(habitacion: habitacion){
    return this.http.post('http://localhost:3000/habitacion', habitacion).subscribe((res:any)=>{
      this.habitaciones$.emit(res.habitaciones);
    })
  }

  delete(idh){
    return this.http.delete('http://localhost:3000/habitacion/'+idh).subscribe((res:any)=>{
      this.habitaciones$.emit(res.habitaciones);
    })
  }


}
