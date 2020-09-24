import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Router } from '@angular/router';
import { Filme } from '../filme.model';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  filme: Filme;

  constructor(
    public filmeService: FilmeService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.filme = {};
  }

  postFilme(form: Filme): void{
    this.filmeService.postFilmes(this.filme).subscribe(res =>{
      console.log(res);
      console.log("Cadastro Efetuado com sucesso!!")
      this.router.navigate(['/filmes'])
    })
  }
}
