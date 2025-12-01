import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiURL = 'https://localhost:7257/api/Funcionario';

  constructor(http: HttpClient) { }
}
