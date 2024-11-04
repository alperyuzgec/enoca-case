import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CategoryComponent // Burada tanımlanıyor
  ],
  imports: [
    CommonModule,
    RouterModule // RouterModule burada olmalı
  ],
  exports: [
    CategoryComponent // Gerekirse dışarı aktarabilirsiniz
  ]
})
export class CategoryModule { }
