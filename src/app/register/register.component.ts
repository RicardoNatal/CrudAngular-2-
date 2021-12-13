import { PessoaPost } from './../pessoa/pessoa-post';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PessoaGet } from '../pessoa/pessoa-get';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  pessoaPost = new PessoaPost;

  url = 'http://localhost:8080/';
  headers = new HttpHeaders().set(
    'Content-Type',
    'application/json;charset=UTF-8'
  );

  constructor(private http: HttpClient) {}

  addPessoa() {
    let options = { headers: this.headers };
    let nome = this.pessoaPost.nome;
    let salario = this.pessoaPost.salario;
    let coisaFavorita = this.pessoaPost.coisaFavorita;

    this.http
      .post(this.url, {
        nome,
        salario,
        coisaFavorita,
        options,
      })
      .toPromise()
      .then((data: any) => {
        console.log(data);
      });
  }
}
