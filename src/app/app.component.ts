import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Platform } from '@ionic/angular';
import { StatusBarService } from './services/status-bar';
import {SplashScreen} from '@capacitor/splash-screen';
import { Capacitor } from '@capacitor/core';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBarService: StatusBarService,
  ) {
    SplashScreen.hide();
    SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBarService.setStatusBarColor(); // Set default color
    });
  }
}
