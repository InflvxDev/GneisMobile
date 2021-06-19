import { Component, OnInit } from '@angular/core';
import { cliente } from '../../class/cliente';
import { ClienteService } from '../../services/cliente.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-clientelist',
  templateUrl: './clientelist.page.html',
  styleUrls: ['./clientelist.page.scss'],
})
export class ClientelistPage implements OnInit {
  clientes: cliente[];
  constructor(
    private ClienteService: ClienteService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.ClienteService.get();
    this.get();
  }

  get() {
    this.ClienteService.clientes$.subscribe((res) => {
      this.clientes = res;
    });
  }

  delete(idc) {
    this.ClienteService.delete(idc);
    this.presentAlert('El cliente ha sido eliminado');
  }

  async presentAlert(mensaje) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Proceso Exitoso',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  update(clienteModificado: cliente){
    this.ClienteService.update(clienteModificado);
    this.presentAlert('El cliente ha sido Modificado');
  }

  async presentAlertPrompt(clientenModificar : cliente) {
    let clienteModificado : cliente;
    clienteModificado = clientenModificar;

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Modificar Cliente ${clientenModificar.nombre}`,
      inputs: [
        
        {
          name: 'nombre',
          type: 'text',
          value: `${clientenModificar.nombre}`
        },
        {
          name: 'edad',
          type: 'number',
          value: `${clientenModificar.edad}`,
        },
        {
          name: 'sexo',
          type: 'text',
          value: `${clientenModificar.sexo}`
        },
        {
          name: 'telefono',
          type: 'number',
          value: `${clientenModificar.telefono}`,
        },
        {
          name: 'correo',
          type: 'email',
          value: `${clientenModificar.correo}`,
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
            console.log(data);
            clienteModificado.nombre = data.nombre;
            clienteModificado.edad = data.edad;
            clienteModificado.sexo = data.sexo;
            clienteModificado.telefono = data.telefono;
            clienteModificado.correo = data.correo;
            this.update(clienteModificado);
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
