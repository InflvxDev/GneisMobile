import { Component, OnInit } from '@angular/core';
import { cliente } from '../../class/cliente';
import { ClienteService } from '../../services/cliente.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-clientereg',
  templateUrl: './clientereg.page.html',
  styleUrls: ['./clientereg.page.scss'],
})
export class ClienteregPage implements OnInit {
  cliente: cliente;
  constructor(
    private clienteService: ClienteService,
    public alertController: AlertController
  ) {
    this.cliente = new cliente();
  }

  ngOnInit() {}

  addcliente() {
    console.log(this.cliente);
    this.clienteService.post(this.cliente);
    this.cliente.cedula = null;
    this.cliente.correo = '';
    this.cliente.edad = null;
    this.cliente.nombre = '';
    this.cliente.sexo = '';
    this.cliente.telefono = null;
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Proceso Exitoso',
      message: 'El cliente se creo correctamente',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
