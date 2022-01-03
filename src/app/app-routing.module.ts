import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnindyaComponentComponent } from './anindya-component/anindya-component.component';

const routes: Routes = [
  { path: 'home', component: AnindyaComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
