import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnglishComponent } from './languages/english/english.component';
import { UnderstandingComponent } from './contents/understanding/understanding.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'english', component: EnglishComponent},
  {path: 'understanding', component: UnderstandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
