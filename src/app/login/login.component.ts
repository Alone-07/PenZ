import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent  implements OnInit {

  constructor(private router: Router, private storage: StorageService) { }
  
   ngOnInit() { }
  
  async redirectToHome(): Promise<any> {
    const authToken = await this.storage.set('authToken', `logged-${Date.now()}`);
    console.warn(await this.storage.get('authToken'));
    this.router.navigateByUrl('/tabs/dashboard');
  }
}
