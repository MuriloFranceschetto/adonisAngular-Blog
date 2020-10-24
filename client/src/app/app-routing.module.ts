import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import {InicialPageComponent} from "./pages/inicial-page/inicial-page.component";

const routes: Routes = [
  { path: '', component: InicialPageComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
