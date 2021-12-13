import { PessoaGet } from './../pessoa/pessoa-get';
import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly url = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

    listar() {
    return this.http.get<PessoaGet[]>(this.url);
  }
}
