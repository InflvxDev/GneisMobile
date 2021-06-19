import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { habitacion } from '../class/habitacion';
@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  baseurl: string = 'https://gneis-server.herokuapp.com/habitacion';
  habitaciones$ = new EventEmitter<habitacion[]>();
  constructor(private http: HttpClient) {
    
   }



  get(){
    return this.http.get(this.baseurl).subscribe((res:any)=>{
      this.habitaciones$.emit(res.habitaciones);
    })
  }

  post(habitacion: habitacion){
    return this.http.post(this.baseurl, habitacion).subscribe((res:any)=>{
      this.habitaciones$.emit(res.habitaciones);
    })
  }

  delete(idh){
    return this.http.delete(this.baseurl+'/'+idh).subscribe((res:any)=>{
      this.habitaciones$.emit(res.habitaciones);
    })
  }

  update(habitacionModificada : habitacion){
    return this.http.put(this.baseurl, habitacionModificada).subscribe((res:any)=>{
      this.habitaciones$.emit(res.habitaciones);
    })
  }


}
