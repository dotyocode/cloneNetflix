import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-movie-feat',
  templateUrl: './movie-feat.component.html',
  styleUrls: ['./movie-feat.component.css']
})
export class MovieFeatComponent implements OnInit {

  public movies: any;
  public movieSelect: any;

  featureData: any = null;

  constructor(public apiServe: ApiService) { }

  ngOnInit(): void {
    this.listarFoto()
  }

  listarFoto() {
    this.apiServe.getMovies().subscribe((dados) => {
      console.log(dados);
      this.movies = dados.results
    });
  }


  filmesRandom(){

  }




}
