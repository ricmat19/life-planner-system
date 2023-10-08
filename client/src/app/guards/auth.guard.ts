import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

export class AuthGuard implements CanActivate {

  // const accountService = inject(AccountService);
  // const toastr = inject(ToastrService);

  // return AccountService.currentUser$.pipe(
  //   map(user => {
  //     if (user) {
  //       return true;
  //     } else {
  //       toastr.error('Unauthorized!');
  //       return false;
  //     }
  //   })
  // )


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
