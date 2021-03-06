import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../../components/modals/login/login.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController: ModalController,

  ) { }

  async openLoginModal() {
    const loginModal = await this.modalController.create({
      component: LoginComponent,
    });
    await loginModal.present();
  }

}
