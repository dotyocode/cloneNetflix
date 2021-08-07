import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //icons FontAwesomeM

  scrollXFilmes = 0;
  scrollXRec = 0;
  scrollX = 0;
  //Variaveis
  public movies: Array<any> = [];
  public destaques: Array<any> = [];
  public alta: Array<any> = [];
  public tamanho: number;

  constructor(public apiServe: ApiService) {
    this.tamanho = 0;
    //this.scrollX = -400;
   }

  ngOnInit(): void {
    //ao iniciar ira listar os dados
    this.listar()
    this.listaDestaque();
    this.listaAlta();
  }

  listar() {
    this.apiServe.getMovies().subscribe((dados) => {
      setTimeout(() => {
        console.log(dados);
        this.movies = dados.results;
        this.tamanho = dados.results.length * 150;
      }, 500);
    });
  }

  listaDestaque() {
    this.apiServe.getDestaque().subscribe((data) => {
      setTimeout(() => {
        console.log(data);
        this.destaques = data.results
        this.tamanho = data.results.length * 150;
      }, 500);
    });
  }

  listaAlta() {
    this.apiServe.getAlta().subscribe((data) => {

      setTimeout(() => {
        console.log(data);
        this.alta = data.results
        this.tamanho = data.results.length * 150;
      }, 500);
    });
  }

  moveEsquerdaFilmes(){
    let x = this.scrollXFilmes + Math.round(window.innerWidth / 2);

    if(x > 0){
       x = 0
    }

    this.scrollXFilmes = x;
  }

  moveDireitaFilmes(){
    let x = this.scrollXFilmes - Math.round(window.innerWidth / 2);
    let listW: any = this.tamanho;

    if((window.innerWidth - listW ) > x) {
      x = (window.innerWidth - listW ) - 60;
    }

    this.scrollXFilmes = x;
  }

  moveEsquerdaRec(){
    let x = this.scrollXRec + Math.round(window.innerWidth / 2);

    if(x > 0){
       x = 0
    }

    this.scrollXRec = x;
  }


  moveDireitaRec(){
    let x = this.scrollXRec - Math.round(window.innerWidth / 2);
    let listW: any = this.tamanho;

    if((window.innerWidth - listW ) > x) {
      x = (window.innerWidth - listW ) - 60;
    }

    this.scrollXRec = x;
  }

  moveEsquerdaAlt(){
    let x = this.scrollX + Math.round(window.innerWidth / 2);

    if(x > 0){
       x = 0
    }

    this.scrollX = x;
  }

  moveDireitaAlt(){
    let x = this.scrollX - Math.round(window.innerWidth / 2);
    let listW: any = this.tamanho;

    if((window.innerWidth - listW ) > x) {
      x = (window.innerWidth - listW ) - 60;
    }

    this.scrollX = x;
  }


}
