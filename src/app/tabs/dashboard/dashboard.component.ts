import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBarService } from 'src/app/services/status-bar';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false,
})
export class DashboardComponent  implements OnInit, OnDestroy  {

  private dashboardColor = '#9720730d'; // Custom color for the dashboard

  constructor(
    private platform: Platform,
    private statusBarService: StatusBarService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBarService.setStatusBarColor(this.dashboardColor);
    });
  }

  ngOnInit() {
    // Listen for navigation events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && !event.url.includes('/dashboard')) {
        // Reset status bar color when navigating away from the dashboard
        this.statusBarService.resetStatusBarColor();
      }
    });
  }

  ngOnDestroy() {
    // Reset status bar color when the component is destroyed (e.g., navigating away)
    this.statusBarService.resetStatusBarColor();
  }

}
