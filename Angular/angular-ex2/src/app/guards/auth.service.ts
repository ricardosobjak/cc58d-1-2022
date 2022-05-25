import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //recuperar informação do localstorage
    if (localStorage.getItem('token'))
      return true;

    this.router.navigate(['/login']); // Redirecionando a navegação
    return false;
  }
}
