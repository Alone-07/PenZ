import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBarService } from 'src/app/services/status-bar';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false,
})
export class DashboardComponent implements OnInit, OnDestroy {
  greeting: string = 'Good Morning';
  private dashboardColor = '#9720730d';
  private greetingInterval: any;

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

  updateGreeting() {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      this.greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
      this.greeting = 'Good Afternoon';
    } else if (hour >= 17 && hour < 22) {
      this.greeting = 'Good Evening';
    } else {
      this.greeting = 'Good Night';
    }
  }

  ngOnInit() {
    this.updateGreeting();

    this.greetingInterval = setInterval(() => {
      this.updateGreeting();
    }, 60000);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && !event.url.includes('/dashboard')) {
        this.statusBarService.resetStatusBarColor();
      }
    });
  }

  ngOnDestroy() {
    if (this.greetingInterval) {
      clearInterval(this.greetingInterval);
    }
    this.statusBarService.resetStatusBarColor();
  }
}