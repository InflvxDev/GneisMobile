import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../../services/habitacion.service';
import { habitacion } from '../../class/habitacion';

@Component({
  selector: 'app-habitacioneslist',
  templateUrl: './habitacioneslist.page.html',
  styleUrls: ['./habitacioneslist.page.scss'],
})
export class HabitacioneslistPage implements OnInit {
habitaciones: habitacion[];
  constructor(private habitacionservice : HabitacionService) { 
    
  }

  ngOnInit() {
    this.habitacionservice.get();
    this.get();
  }

  get(){
    this.habitacionservice.habitaciones$.subscribe((res)=>{
      this.habitaciones = res;
    })
  }

  delete(idh){
    this.habitacionservice.delete(idh);
  }

 

}
