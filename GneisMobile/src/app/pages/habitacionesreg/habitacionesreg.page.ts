import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { habitacion } from '../../class/habitacion';
import { HabitacionService } from '../../services/habitacion.service';

@Component({
  selector: 'app-habitacionesreg',
  templateUrl: './habitacionesreg.page.html',
  styleUrls: ['./habitacionesreg.page.scss'],
})
export class HabitacionesregPage implements OnInit {
  habitacion: habitacion; 
  constructor(private habitacionService: HabitacionService,public alertController: AlertController) { 
    this.habitacion = new habitacion();
  }

  ngOnInit() {
  }

  addhabitacion(){
    console.log(this.habitacion);
  this.habitacionService.post(this.habitacion);
  this.habitacion.nombre= "";
  this.habitacion.tipo = "";
  this.habitacion.costo = null;
  
  this.presentAlert();    
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Proceso Exitoso',
      message: 'La habitacion se creo correctamente',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
 

}
