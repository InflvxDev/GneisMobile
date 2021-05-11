import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { habitacion } from '../class/habitacion';
@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  
  habitaciones$ = new EventEmitter<habitacion[]>();
  constructor(private http: HttpClient) {
    
   }



  get(){
    return this.http.get('http://192.168.1.13:3000/habitacion').subscribe((res:any)=>{
      this.habitaciones$.emit(res.habitaciones);
    })
  }

  post(habitacion: habitacion){
    return this.http.post('http://192.168.1.13:3000/habitacion', habitacion).subscribe((res:any)=>{
      this.habitaciones$.emit(res.habitaciones);
    })
  }

  delete(idh){
    return this.http.delete('http://192.168.1.13:3000/habitacion/'+idh).subscribe((res:any)=>{
      this.habitaciones$.emit(res.habitaciones);
    })
  }


}
