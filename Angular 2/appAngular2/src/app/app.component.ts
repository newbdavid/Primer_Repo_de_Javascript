import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {MasterURlService} from "./services/master-url.service";

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

  error:string ="no hay errores";

  constructor(private http: Http){//es el tipo de clase http
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

  nuevaTienda:any={};

  crearTienda(formulario) {
    console.log(formulario);

    this.http.post("http://localhost:1337/" + "Tienda", {
      nombre: formulario.value.nombre
    }).subscribe(
      (res) => {
        console.log("No hubo Errores");
        console.log(res);
        this.nuevaTienda = {}
      },
      (err) => {
        console.log("Ocurrio un error", err);
      },
      () => {
        console.log("Termino la función vamos a las casas")
      }
    );


  }



  /*crearTienda(formulario){
    console.log(formulario);
    this.http
      .post("http://localhost:1337/Tienda", formulario.valores)
      .subscribe(
        (res)=>{
          console.log('Respuesta: ',res);
          this.nuevaTienda={};
        },
        err=>console.log('Error: ',err),
        ()=>{
          console.log("Se completo la accion")
        }

      );
  }*/

  title = 'app works!';
}
