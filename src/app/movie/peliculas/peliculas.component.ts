import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public title: string

  constructor() {
    this.title = "Componente Peliculas";
    console.log("Contructor lanzado")
   }

  ngOnInit() {
    console.log("Componente lanzado")
  }

  ngDoCheck(){
    console.log("DoCheck lanzado")
  }

  ChangeTitle(){
    this.title = "El titulo se ha cambiado"
  }

  ngOnDestroy(){
    console.log("Eliminar")
  }
}
