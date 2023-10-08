import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../services/account.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        this.cancelRegistration();
      },
      error: error => {
        this.toastr.error(error.error),
        console.log(error)
      }
    })
  }

  cancelRegistration() {
    this.cancelRegister.emit(false);
  }

}
