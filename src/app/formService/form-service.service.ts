import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FormService {
  url_backend = environment.url_backend + '/usuario';
  constructor(private http: HttpClient) {}

  createUser(dataForm: any) {
    console.log(dataForm);

    return this.http.post(`${this.url_backend}/crear-usuario`, dataForm);
  }
  getUsers() {
    return this.http.get(`${this.url_backend}/obtener-usuarios`);
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.url_backend}/eliminar-usuario/${id}`);
  }
}
