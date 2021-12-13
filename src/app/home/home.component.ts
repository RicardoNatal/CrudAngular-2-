import { Component, OnInit } from '@angular/core';
import { HomeService } from '../core/home.service';
import { PessoaGet } from '../pessoa/pessoa-get';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    pessoas: PessoaGet[] = [];

    constructor(private servico: HomeService){}

    ngOnInit(): void {
      this.servico.listar().subscribe(objetos => this.pessoas = objetos);
      }
    }
