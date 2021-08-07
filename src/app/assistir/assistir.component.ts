import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-assistir',
  templateUrl: './assistir.component.html',
  styleUrls: ['./assistir.component.css']
})

export class AssistirComponent implements OnInit {

  public id: any;
  public video: any;
  urlVideo: any;
  Url: any;
  public similar: any;

  widhthTrailer: any;

  scrollXRec = 0;
  public tamanho: number;

  constructor(private activatedRoute: ActivatedRoute, public apiServe: ApiService, private sanitizer: DomSanitizer) {
    this.widhthTrailer = window.screen.width
    this.tamanho = 0;
  }

  ngOnInit(): void {

    //recuperando o ID passado da pagina HOME
    let params = this.activatedRoute.params.subscribe(parameter => {
      this.id = parameter.id;
    })

    //recuperando o ID passado da pagina HOME
    let paramsV = this.activatedRoute.params.subscribe(parameter => {
      this.video = parameter.id;
    })

    //recuperando o ID passado da pagina HOME
    let paramsC = this.activatedRoute.params.subscribe(parameter => {
    this.similar = parameter.id;
    })

    console.log(this.id)

    //retorno das informaçoes dos filmes
    this.apiServe.getOneMovie(this.id).subscribe((dados) => {
      console.log(dados);
      this.id = dados;
    });

    this.apiServe.getSimilar(this.similar).subscribe((dados) => {
      console.log("creditos",dados);
      this.similar = dados.results;
      this.tamanho = dados.results.length * 150;
    });

    //retorno das informaçoes dos videos dos filmes
    this.apiServe.getOneMovieVideo(this.video).subscribe((dados) => {
     return setTimeout(() => {
        this.video = dados;
        this.urlVideo = `https://www.youtube.com/embed/${this.video.results[0].key}`
        this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);
      }, 1000);
    });

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


}
