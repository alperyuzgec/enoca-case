import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './about/about.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

const routes: Routes = [
  { path: 'category/:id', component: CategoryComponent },
  // Diğer rotalar
];


@NgModule({
  declarations: [
    AppComponent ,HomeComponent, HeaderComponent, AboutComponent,AboutComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  RouterModule.forRoot(routes),
    CategoryModule,PdfViewerModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
