import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: false,
})
export class AccountComponent  implements OnInit {
    userData = {
        name: 'Cameron Williamson',
        email: 'jessica.hanson@example.com',
        profileImage: '../../assets/images/profile-avatar.png'
    };

    constructor(private router: Router) { }

    ngOnInit() {}

    navigateToPage(route: string) {
        this.router.navigate([route]);
    }

}
