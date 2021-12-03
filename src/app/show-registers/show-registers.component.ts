import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormService } from '../formService/form-service.service';
@Component({
  selector: 'app-show-registers',
  templateUrl: './show-registers.component.html',
  styleUrls: ['./show-registers.component.css'],
})
export class ShowRegistersComponent implements OnInit {
  usersData: any;

  constructor(private serviceForm: FormService) {}

  getDataFields() {
    this.serviceForm.getUsers().subscribe(
      (response: any) => {
        this.usersData = response.usuarios;
        console.log(this.usersData);
      },
      (error: any) => {
        console.log(error);
        alert('hay errores');
      }
    );
  }

  eliminarDosCampos(id: any) {
    this.serviceForm.deleteUser(id).subscribe(
      (response: any) => {
        if (response.registroForms.deletedCount > 0) {
          alert('registro eliminado');
          this.getDataFields();
        } else {
          alert('no se a podido eliminar el registro');
        }
      },
      (error: any) => {
        console.log(error);
        alert('hay errores');
      }
    );
  }

  ngOnInit(): void {
    this.getDataFields();
  }
}
