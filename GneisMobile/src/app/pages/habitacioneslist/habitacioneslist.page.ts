import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../../services/habitacion.service';
import { habitacion } from '../../class/habitacion';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-habitacioneslist',
  templateUrl: './habitacioneslist.page.html',
  styleUrls: ['./habitacioneslist.page.scss'],
})
export class HabitacioneslistPage implements OnInit {
habitaciones: habitacion[];
  constructor(private habitacionservice : HabitacionService,public alertController: AlertController) { 
    
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
    this.presentAlert('La habitacion ha sido eliminada');   
  }

  async presentAlert(mensaje) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Proceso Exitoso',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  update(habitacionModificada : habitacion){

    this.habitacionservice.update(habitacionModificada);
    this.presentAlert('La habitacion se ha modificado correctamente');
  }

  async presentAlertPrompt(habitacionModificar : habitacion) {
    let habitacionModificada : habitacion;
    habitacionModificada = habitacionModificar;

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Modificar Habitacion ${habitacionModificar.nombre}`,
      inputs: [
        
        {
          name: 'tipo',
          type: 'text',
          value: `${habitacionModificar.tipo}`
        },
        {
          name: 'costo',
          type: 'number',
          value: `${habitacionModificar.costo}`,
        },
       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            habitacionModificada.tipo = data.tipo;
            habitacionModificada.costo = data.costo;
            this.update(habitacionModificada);
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

 

}
