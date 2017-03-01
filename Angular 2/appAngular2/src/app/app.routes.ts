import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {TiendaComponent} from "./tienda/tienda.component";
import {ProductoComponent} from "./producto/producto.component";

/**
 * Created by David Moncayo on 24/02/2017.
 */
export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'tienda/:idTienda/producto', component:ProductoComponent}
];

export const routing: ModuleWithProviders =  RouterModule.forRoot(routes);
