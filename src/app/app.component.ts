import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Platform } from '@ionic/angular';
import { StatusBarService } from './services/status-bar';
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
    private statusBarService: StatusBarService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBarService.setStatusBarColor(); // Set default color
    });
  }
}
