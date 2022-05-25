import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private loginService: LoginService) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  public login() {
    const credentials = {
      email: this.form.value['username'],
      password: this.form.value['password']
    }

    //Invocar o serviço de login...
    this.loginService.login(credentials)
      .pipe(
        catchError( err => {
          alert("Falha ao fazer login");
          console.log(err);
          throw err;
        })
      )
      .subscribe((res) => {
        const token = (<{ token: string }>res).token;
        console.log(token);

        localStorage.setItem('token', token); // Armazenamento local
      });
  }

}
