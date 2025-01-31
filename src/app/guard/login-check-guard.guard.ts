import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckGuardGuard implements CanActivate {
  
   constructor(private router: Router, private storage: StorageService) {
  }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    //Initializing Storage

    const authToken = await this.storage.get('removeItem');
    console.warn('authToken => ', authToken);
    if(!authToken) {
      this.router.navigateByUrl('login');
    }
    await this.storage.remove('authToken');
    return true;
  }
}
// export const loginCheckGuardGuard: CanActivateFn = async (route, state) => {
//   const storage = new Storage();
//   const authToken = storage.getItem('authToken');
//   const router = inject(Router);
//   console.warn('authToken => ', authToken);
//   if(!authToken) {
//     router.navigateByUrl('login');
//   }
//   storage.removeItem('authToken');
//   return true;
// };
