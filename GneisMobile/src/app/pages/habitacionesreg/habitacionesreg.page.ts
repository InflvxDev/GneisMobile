import { Component, OnInit } from '@angular/core';
import { habitacion } from '../../class/habitacion';

@Component({
  selector: 'app-habitacionesreg',
  templateUrl: './habitacionesreg.page.html',
  styleUrls: ['./habitacionesreg.page.scss'],
})
export class HabitacionesregPage implements OnInit {
  habitacion: habitacion; 
  constructor() { 
    this.habitacion = new habitacion();
  }

  ngOnInit() {
  }

  addhabitacion(){
    console.log(this.habitacion);
    
  }

}
