import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { SingleUserResult, User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute, // Objeto sobre a rota atual
    private router: Router // Trabalhar com roteamento
  ) {
    this.form = fb.group({
      firstName: fb.control('', Validators.required),
      lastName: fb.control('', Validators.required),
      email: fb.control('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params);

      if (params['id']) {
        this.userService.getUser(params['id'])
          .subscribe((u: SingleUserResult) => {
            this.form.controls['firstName'].setValue(u.data.first_name);
            this.form.controls['lastName'].setValue(u.data.last_name);
            this.form.controls['email'].setValue(u.data.email);
          });
      }
    });
  }

  save() {
    console.log(this.form);

    let user = new User();
    user.first_name = this.form.controls['firstName'].value;
    user.last_name = this.form.value['lastName'];
    user.email = this.form.value['email'];

    this.userService.create(user)
      .pipe(
        catchError(err => {
          console.log(err);
          alert("Erro ao salvar usuário");
          throw err;
        })
      )
      .subscribe((u: User) => {
        console.log(u);
        alert("Usuário salvo!");
      });
  }

  public isValid(name: string, error: string) {
    return this.form.controls![name].errors![error];
  }
}
