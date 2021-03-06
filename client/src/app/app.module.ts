import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './theme.module';
import { PostsComponent } from './pages/posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { InicialPageComponent } from './pages/inicial-page/inicial-page.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    UploadFilesComponent,
    InicialPageComponent
  ], 
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ThemeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ThemeModule,
    BrowserAnimationsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ], 
  bootstrap: [AppComponent],
  providers: [ThemeModule,],
})
export class AppModule { }
