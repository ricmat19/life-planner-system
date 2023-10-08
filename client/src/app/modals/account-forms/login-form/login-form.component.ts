import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../../../models/users';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  model: any = {}
  currentUser$: Observable<User | null> = of(null);

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    })
  }

  logout() {
    this.accountService.logout();
  }
}