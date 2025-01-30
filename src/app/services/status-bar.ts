import { Injectable } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class StatusBarService {
  private defaultColor = '#A91B78';

  constructor() {}

  async setStatusBarColor(color: string = this.defaultColor) {
    if (Capacitor.getPlatform() === 'web') {
      console.log('StatusBar plugin is not available on the web.');
      return;
    }

    try {
      await StatusBar.setBackgroundColor({ color });
      await StatusBar.setOverlaysWebView({ overlay: false });
    } catch (error) {
      console.error('Error setting status bar', error);
    }
  }

  // Reset status bar to default color
  async resetStatusBarColor() {
    await this.setStatusBarColor(this.defaultColor);
  }
}