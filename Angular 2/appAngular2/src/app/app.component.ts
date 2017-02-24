import {Component, OnInit} from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  //Mejor asi
  //region Description
/*  private nombre: string = "Adrian";
  apellido: string = "Sarzosa";




  //Esto es reemplazado por lo de arriba

  constructor(private nombreConstructor: string,
  private apellidoConstructor: string){
    this.nombre=this.nombreConstructor;
    this.apellido = this.apellidoConstructor;
  }
  //*/endregion

  //Segunda CUestion
  /*
  apellido="Hola"
  constructor(){
    this.apellido = this.saludar();
    this.saludar2("Moncayo");
  }


  //Ahi debe retornar un string  al poner :string
  saludar(): string {
    console.log("Hola")
    return `hi everyone, mi nombre es: ${this.apellido};`
  }

  saludar2(apellido:string, nombre?:string) {
    console.log(`${apellido} y ${nombre}`);
  }
*/
  nombre:string="";
  apellido:string="";

  constructor(){
    this.apellido="Moncayo"
    this.nombre="David"
  }
  ngOnInit(){
    console.log("On Init")
    this.apellido="Balseca"
    this.nombre="Enrique"
  }

  nombreCompleto():string{
    return `${this.nombre} ${this.apellido}`
  }

  hizoClick(){
    console.log("Hizo Click");
  }

  hizoFocus(){
    console.log("Hizo Focus")
  }

  crearTienda(formulario){
    console.log(formulario);
  }

  title = 'app works!';
}
