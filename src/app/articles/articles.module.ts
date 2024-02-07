import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    HttpClientModule
  ]
})
export class ArticlesModule { }
