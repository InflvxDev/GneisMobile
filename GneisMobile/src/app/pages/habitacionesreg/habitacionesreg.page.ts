import { Component, OnInit } from '@angular/core';
import { habitacion } from '../../class/habitacion';
import { HabitacionService } from '../../services/habitacion.service';

@Component({
  selector: 'app-habitacionesreg',
  templateUrl: './habitacionesreg.page.html',
  styleUrls: ['./habitacionesreg.page.scss'],
})
export class HabitacionesregPage implements OnInit {
  habitacion: habitacion; 
  constructor(private habitacionService: HabitacionService) { 
    this.habitacion = new habitacion();
  }

  ngOnInit() {
  }

  addhabitacion(){
    console.log(this.habitacion);
  this.habitacionService.post(this.habitacion);
    
  }

 

}
