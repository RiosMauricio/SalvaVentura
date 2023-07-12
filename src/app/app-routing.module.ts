import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AventurasComponent } from './components/aventuras/aventuras.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'aventuras', component: AventurasComponent},
  { path: '**', pathMatch:'full',redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
