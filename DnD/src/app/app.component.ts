import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash/splash.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bienvenida', url: '/bienvenida', icon: 'diamond' },
    { title: 'Clases', url: '/clases', icon: 'accessibility' },
    { title: 'Conversor', url: '/conversor', icon: 'cash' },
    { title: 'Weather', url: '/weather', icon: 'cloud' },
    { title: 'About', url: '/about', icon: 'person' },
    { title: 'Nada', url: '/nada', icon: 'alert' }
   
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private modalController: ModalController) {
    this.presentSplash();
  }


  async presentSplash(){
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
