import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../../services/habitacion.service';

@Component({
  selector: 'app-habitacioneslist',
  templateUrl: './habitacioneslist.page.html',
  styleUrls: ['./habitacioneslist.page.scss'],
})
export class HabitacioneslistPage implements OnInit {

  constructor(private habitacionservice : HabitacionService) { 
    habitacionservice.get();
  }

  ngOnInit() {
  }

}
