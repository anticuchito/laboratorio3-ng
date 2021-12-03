import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../formService/form-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  formulario: any;
  constructor(
    private fb: FormBuilder,
    private serviceFormulario: FormService
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get formReactive() {
    return this.formulario.controls;
  }

  enviarDatos() {
    //suscribe: is a whatcher and allos transmit data async and sync
    this.serviceFormulario.createUser(this.formulario.value).subscribe(
      (response: any) => {
        if (response.usuario) {
          alert('datos guardados exitosamente');
          console.log(response);
        } else {
          alert('datos no registrados');
        }
      },
      (error: any) => {
        console.log(error);
        alert(`error al registrar. error: ${error}`);
      }
    );
  }
}
