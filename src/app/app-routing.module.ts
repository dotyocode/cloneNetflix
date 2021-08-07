import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistirComponent } from './assistir/assistir.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'assistir/:id', component: AssistirComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
